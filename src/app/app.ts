import { Component, computed, signal } from '@angular/core';
import {
  ARSENAL_ITEMS,
  ArsenalItem,
  CHACO_EVENTS,
  HISTORICAL_PROTAGONISTS,
  HistoricalEvent,
  HistoricalProtagonist,
  QUIZ_QUESTIONS,
  TACTICAL_LOCATIONS,
  TacticalLocation,
} from './chaco-data';

type SectionTab = 'cronologia' | 'mapa' | 'protagonistas' | 'arsenal' | 'multimedia' | 'evaluacion';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly activeTab = signal<SectionTab>('cronologia');
  protected readonly searchQuery = signal<string>('');
  protected readonly selectedYear = signal<string>('TODOS');
  protected readonly selectedCountryFilter = signal<'TODOS' | 'Bolivia' | 'Paraguay' | 'Neutral'>('TODOS');
  protected readonly selectedArsenalCategory = signal<string>('TODOS');

  // Interactive selections
  protected readonly selectedEvent = signal<HistoricalEvent>(CHACO_EVENTS[1]); // Boquerón default
  protected readonly modalEvent = signal<HistoricalEvent | null>(null);
  protected readonly selectedLocation = signal<TacticalLocation>(TACTICAL_LOCATIONS[4]); // Boquerón default
  protected readonly selectedProtagonist = signal<HistoricalProtagonist>(HISTORICAL_PROTAGONISTS[0]);

  // Multimedia & Audio Synthesizer state
  protected readonly isAudioPlaying = signal<boolean>(false);
  protected readonly activeRadioMessageIndex = signal<number>(0);
  protected readonly simulationYearProgress = signal<number>(1932);
  protected readonly documentaryChapter = signal<number>(0);
  private audioCtx: AudioContext | null = null;
  private synthInterval: ReturnType<typeof setInterval> | null = null;
  private speechSynthesisActive = signal<boolean>(false);
  protected readonly isNarrating = this.speechSynthesisActive.asReadonly();

  // Quiz state
  protected readonly quizAnswers = signal<Record<number, number>>({});
  protected readonly quizSubmitted = signal<boolean>(false);

  // Raw datasets
  protected readonly events = CHACO_EVENTS;
  protected readonly locations = TACTICAL_LOCATIONS;
  protected readonly protagonists = HISTORICAL_PROTAGONISTS;
  protected readonly arsenal = ARSENAL_ITEMS;
  protected readonly quizQuestions = QUIZ_QUESTIONS;

  protected readonly radioDispatches = [
    {
      code: 'CIFRADO BO-32-09',
      date: '19 Septiembre 1932 - 06:15',
      origin: 'Comando Fortín Boquerón (Tcnl. Marzana)',
      morse: '... --- ... / -... --- --.- ..- . .-. --- -.',
      message: 'REDUCTO BOQUERÓN SOSTIENE LÍNEA A PESAR DE INTENSO BOMBARDEO DE MORTEROS. SOLICITAMOS LANZAMIENTO AÉREO DE MUNICIÓN Y HIELO PARA HERIDOS.',
    },
    {
      code: 'CIFRADO BO-32-12',
      date: '04 Diciembre 1932 - 11:40',
      origin: 'Escuadrilla de Caza Km 7 (My. Rafael Pabón)',
      morse: '...- .. -.-. - --- .-. .. .- / .- . .-. . .-',
      message: 'INTERCEPTADO BIPLANO POTEZ 25 SOBRE SECTOR KILÓMETRO SIETE. TRAS MANIOBRA ACROBÁTICA SE CONFIRMÓ DERRIBO. CIELO ASEGURADO.',
    },
    {
      code: 'CIFRADO BO-34-05',
      date: '24 Mayo 1934 - 18:00',
      origin: 'Comando Cañada Strongest (Gral. Peñaranda)',
      morse: '-.-. . .-. -.-. --- / -.-. --- -- .--. .-.. . - ---',
      message: 'ANILLO ENVOLVENTE CERRADO CON ÉXITO EN CAÑADA COCHABAMBA. MÁS DE MIL TRESCIENTOS EFECTIVOS RENDIDOS Y BATERÍAS CAPTURADAS.',
    },
    {
      code: 'CIFRADO PAZ-35-06',
      date: '14 Junio 1935 - 12:00',
      origin: 'Comisión Militar Neutral - Puesto Merino',
      morse: '.--. .- --.. / . -. / . .-.. / -.-. .... .- -.-. ---',
      message: 'ALTO AL FUEGO DEFINITIVO EN TODO EL FRENTE DEL CHACO BOREAL. SOLDADOS DE AMBAS NACIONES CONFRATERNIZAN EN LAS TRINCHERAS.',
    },
  ];

  protected readonly documentaryScenes = [
    {
      title: 'I. El Infierno Verde y la Sed (1932)',
      duration: 'Capítulo I · Escenario Geográfico',
      narration:
        'El Chaco Boreal, una planicie aluvial de 250.000 kilómetros cuadrados cubierta de quebracho, tuscales espinosos y temperaturas de hasta 45 grados centígrados, fue el escenario del mayor conflicto bélico sudamericano del siglo XX. Más que las balas, la sed determinó cada maniobra estratégica.',
      stats: [
        { label: 'Superficie en disputa', value: '250.000 km²' },
        { label: 'Temperatura máxima', value: '45 °C a la sombra' },
        { label: 'Detonante inicial', value: 'Laguna Chuquisaca (1932)' },
      ],
    },
    {
      title: 'II. De Boquerón a Nanawa: Guerra de Posiciones (1932–1933)',
      duration: 'Capítulo II · Trincheras y Blindados',
      narration:
        'En septiembre de 1932, 619 soldados bolivianos al mando del Teniente Coronel Manuel Marzana escribieron en Boquerón una de las páginas más heroicas de la historia militar. Poco después, en Kilómetro 7 y Nanawa, el conflicto incorporó por primera vez en América combates aéreos, tanques Vickers y lanzallamas.',
      stats: [
        { label: 'Defensores de Boquerón', value: '619 efectivos (20 días)' },
        { label: 'Primer duelo aéreo', value: '4 Dic 1932 (My. Pabón)' },
        { label: 'Blindados en Nanawa', value: 'Tanques Vickers 6 Ton' },
      ],
    },
    {
      title: 'III. Cañada Strongest, Villa Montes y la Paz (1934–1935)',
      duration: 'Capítulo III · Maniobra y Conciencia Nacional',
      narration:
        'En mayo de 1934 Bolivia ejecutó su maniobra envolvente más brillante en Cañada Strongest. En 1935, la muralla de artillería diseñada por Bernardino Bilbao Rioja en Villa Montes detuvo definitivamente la ofensiva adversaria y aseguró los pozos petroleros, dando paso al Protocolo de Paz del 12 de junio de 1935.',
      stats: [
        { label: 'Prisioneros en Strongest', value: '1.389 efectivos' },
        { label: 'Baterías en Villa Montes', value: '36 baterías de artillería' },
        { label: 'Cese de hostilidades', value: '14 de Junio de 1935 (12:00)' },
      ],
    },
  ];

  // Computed filtered lists
  protected readonly filteredEvents = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const year = this.selectedYear();
    return this.events.filter((ev) => {
      const matchesYear = year === 'TODOS' || ev.phase === year;
      const matchesQuery =
        !query ||
        ev.title.toLowerCase().includes(query) ||
        ev.summary.toLowerCase().includes(query) ||
        ev.location.toLowerCase().includes(query) ||
        ev.tags.some((t) => t.toLowerCase().includes(query));
      return matchesYear && matchesQuery;
    });
  });

  protected readonly filteredProtagonists = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const country = this.selectedCountryFilter();
    return this.protagonists.filter((p) => {
      const matchesCountry = country === 'TODOS' || p.country === country;
      const matchesQuery =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.role.toLowerCase().includes(query) ||
        p.biography.toLowerCase().includes(query);
      return matchesCountry && matchesQuery;
    });
  });

  protected readonly filteredArsenal = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const cat = this.selectedArsenalCategory();
    return this.arsenal.filter((item: ArsenalItem) => {
      const matchesCat = cat === 'TODOS' || item.category === cat;
      const matchesQuery =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.history.toLowerCase().includes(query) ||
        item.origin.toLowerCase().includes(query);
      return matchesCat && matchesQuery;
    });
  });

  protected readonly quizScore = computed(() => {
    const answers = this.quizAnswers();
    let score = 0;
    for (const q of this.quizQuestions) {
      if (answers[q.id] === q.correctIndex) {
        score++;
      }
    }
    return score;
  });

  protected setTab(tab: SectionTab): void {
    this.activeTab.set(tab);
  }

  protected onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  protected selectEvent(ev: HistoricalEvent): void {
    this.selectedEvent.set(ev);
    this.playTacticalClick(ev.audioFreq);
  }

  protected openEventModal(ev: HistoricalEvent): void {
    this.modalEvent.set(ev);
    this.playTacticalClick(ev.audioFreq);
  }

  protected closeEventModal(): void {
    this.modalEvent.set(null);
  }

  protected selectLocation(loc: TacticalLocation): void {
    this.selectedLocation.set(loc);
    this.playTacticalClick(520);
  }

  protected setSimulationYear(year: number): void {
    this.simulationYearProgress.set(year);
    this.playTacticalClick(400 + (year - 1932) * 80);
  }

  // Web Audio API Morse Telegraph & Soundscapes (Zero external MP3 failures)
  protected playTacticalClick(freq = 440): void {
    try {
      if (!this.audioCtx) {
        this.audioCtx = new AudioContext();
      }
      const ctx = this.audioCtx;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch {
      // Ignore audio errors if blocked by browser autoplay policy
    }
  }

  protected toggleMorseTelegraph(index: number): void {
    this.activeRadioMessageIndex.set(index);
    if (this.isAudioPlaying()) {
      this.stopMorseTelegraph();
      return;
    }

    try {
      if (!this.audioCtx) {
        this.audioCtx = new AudioContext();
      }
      const ctx = this.audioCtx;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      this.isAudioPlaying.set(true);
      const pattern = [120, 80, 120, 240, 120, 80, 280, 100, 120];
      let step = 0;

      this.synthInterval = setInterval(() => {
        if (!this.isAudioPlaying()) return;
        const durationMs = pattern[step % pattern.length];
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(680, ctx.currentTime);
        gain.gain.setValueAtTime(0.11, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + durationMs / 1000);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + durationMs / 1000);
        step++;
        if (step > 18) {
          this.stopMorseTelegraph();
        }
      }, 210);
    } catch {
      this.isAudioPlaying.set(false);
    }
  }

  protected stopMorseTelegraph(): void {
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
    this.isAudioPlaying.set(false);
  }

  // Native SpeechSynthesis Narrator for Multimedia Documentary Experience
  protected toggleNarration(text: string): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }
    if (this.speechSynthesisActive()) {
      window.speechSynthesis.cancel();
      this.speechSynthesisActive.set(false);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.98;
    utterance.pitch = 0.95;
    utterance.onend = () => this.speechSynthesisActive.set(false);
    utterance.onerror = () => this.speechSynthesisActive.set(false);
    this.speechSynthesisActive.set(true);
    window.speechSynthesis.speak(utterance);
  }

  protected selectQuizAnswer(questionId: number, optionIndex: number): void {
    if (this.quizSubmitted()) return;
    this.quizAnswers.update((prev) => ({ ...prev, [questionId]: optionIndex }));
    this.playTacticalClick(540);
  }

  protected submitQuiz(): void {
    this.quizSubmitted.set(true);
    this.playTacticalClick(660);
  }

  protected resetQuiz(): void {
    this.quizAnswers.set({});
    this.quizSubmitted.set(false);
  }
}
