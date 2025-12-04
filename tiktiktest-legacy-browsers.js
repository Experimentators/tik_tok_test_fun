/******************* 
 * Tiktiktest *
 *******************/


// store info about the experiment session:
let expName = 'tiktiktest';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
flowScheduler.add(cpt1_instRoutineBegin());
flowScheduler.add(cpt1_instRoutineEachFrame());
flowScheduler.add(cpt1_instRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(end_cpt1RoutineBegin());
flowScheduler.add(end_cpt1RoutineEachFrame());
flowScheduler.add(end_cpt1RoutineEnd());
flowScheduler.add(infoRoutineBegin());
flowScheduler.add(infoRoutineEachFrame());
flowScheduler.add(infoRoutineEnd());
const randomizationLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(randomizationLoopBegin(randomizationLoopScheduler));
flowScheduler.add(randomizationLoopScheduler);
flowScheduler.add(randomizationLoopEnd);


flowScheduler.add(qesfun1RoutineBegin());
flowScheduler.add(qesfun1RoutineEachFrame());
flowScheduler.add(qesfun1RoutineEnd());
flowScheduler.add(ans1RoutineBegin());
flowScheduler.add(ans1RoutineEachFrame());
flowScheduler.add(ans1RoutineEnd());
flowScheduler.add(qesfun2RoutineBegin());
flowScheduler.add(qesfun2RoutineEachFrame());
flowScheduler.add(qesfun2RoutineEnd());
flowScheduler.add(ans2RoutineBegin());
flowScheduler.add(ans2RoutineEachFrame());
flowScheduler.add(ans2RoutineEnd());
flowScheduler.add(qesfun3RoutineBegin());
flowScheduler.add(qesfun3RoutineEachFrame());
flowScheduler.add(qesfun3RoutineEnd());
flowScheduler.add(ans3RoutineBegin());
flowScheduler.add(ans3RoutineEachFrame());
flowScheduler.add(ans3RoutineEnd());
flowScheduler.add(cpt2_instRoutineBegin());
flowScheduler.add(cpt2_instRoutineEachFrame());
flowScheduler.add(cpt2_instRoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);


flowScheduler.add(end_cpt2RoutineBegin());
flowScheduler.add(end_cpt2RoutineEachFrame());
flowScheduler.add(end_cpt2RoutineEnd());
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
    {'name': 'videorandom_for_pavl.xlsx', 'path': 'videorandom_for_pavl.xlsx'},
    {'name': 'video1.mp4', 'path': 'video1.mp4'},
    {'name': 'video2.mp4', 'path': 'video2.mp4'},
    {'name': 'video3.mp4', 'path': 'video3.mp4'},
    {'name': 'video4.mp4', 'path': 'video4.mp4'},
    {'name': 'video5.mp4', 'path': 'video5.mp4'},
    {'name': 'video6.mp4', 'path': 'video6.mp4'},
    {'name': 'video7.mp4', 'path': 'video7.mp4'},
    {'name': 'video8.mp4', 'path': 'video8.mp4'},
    {'name': 'video9.mp4', 'path': 'video9.mp4'},
    {'name': 'video10.mp4', 'path': 'video10.mp4'},
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructionClock;
var text;
var key_resp;
var cpt1_instClock;
var text_3;
var key_resp_2;
var cpt1_routineClock;
var fixcross;
var letter_text;
var response;
var trial_counter_2;
var correct_counter;
var end_cpt1Clock;
var thank_you;
var key_resp_3;
var infoClock;
var text_8;
var videosetClock;
var vidosikiClock;
var vidosiki;
var qesfun1Clock;
var text_4;
var textbox_q1;
var key_resp_8;
var ans1Clock;
var ansver_1;
var qesfun2Clock;
var textbox_q2;
var text_6;
var key_resp_4;
var ans2Clock;
var ansver_2;
var qesfun3Clock;
var text_7;
var textbox_q3;
var key_resp_9;
var ans3Clock;
var ansver_3;
var cpt2_instClock;
var text_5;
var key_resp_6;
var cpt2_routineClock;
var fixcross_2;
var letter_text_2;
var responses;
var trial_counter;
var correct_counter_1;
var end_cpt2Clock;
var thank_you_2;
var key_resp_7;
var endClock;
var text_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Спасибо, что согласились поучаствовать в эксперименте!\n\nУбедитесь, что в настройках дисплея установлена частота обновления 60 Гц.\n\nЭксперимент включает в себя:\n1. CPT-тест\n2. Просмотр видео\n3. Повторный CPT-тест\nИсследование займет примерно 20 минут.\n\nУдачи!\nНажмите ПРОБЕЛ, чтобы продолжить',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "cpt1_inst"
  cpt1_instClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'В этом задании вы будете должны реагировать на представленные буквы. Нажимайте пробел при виде любой буквы, кроме X. Если вы ее видите, ничего не делайте. В этом тесте учитывается время реакции, поэтому, пожалуйста, отвечайте как можно быстрее. Нажмите пробел, чтобы продолжить.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "cpt1_routine"
  cpt1_routineClock = new util.Clock();
  fixcross = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixcross',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  letter_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  trial_counter_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_counter_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Run 'Begin Experiment' code from track_correct_2
  correct_counter = 0;
  
  // Initialize components for Routine "end_cpt1"
  end_cpt1Clock = new util.Clock();
  thank_you = new visual.TextStim({
    win: psychoJS.window,
    name: 'thank_you',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "info"
  infoClock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'сейчас вам нужно будет посмотреть видео на 10 минут\nСмотрите внимательно и не отвлекайтесь',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "videoset"
  videosetClock = new util.Clock();
  vidosikiClock = new util.Clock();
  vidosiki = new visual.MovieStim({
    win: psychoJS.window,
    movie: null,
    name: 'vidosiki',
    units: psychoJS.window.units,
    pos: [0, 0],
    anchor: 'center',
    size: [0.5625, 1],
    ori: 0.0,
    opacity: null,
    loop: false,
    noAudio: false,
    depth: 0
  })
  // Initialize components for Routine "qesfun1"
  qesfun1Clock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'В видео был показан день из жизни студента в какой стране?\nнажмите пробел после ввода ответа\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_q1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_q1',
    text: '',
    placeholder: 'Вводите сюда....',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ans1"
  ans1Clock = new util.Clock();
  ansver_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ansver_1',
    text: 'правильно: Австрия',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "qesfun2"
  qesfun2Clock = new util.Clock();
  textbox_q2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_q2',
    text: '',
    placeholder: 'Вводите сюда...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Про какую русскую еду говорил темнокожий мужчина?\nнажмите пробел после ввода ответа\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ans2"
  ans2Clock = new util.Clock();
  ansver_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ansver_2',
    text: 'правильно: бутерброд',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "qesfun3"
  qesfun3Clock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'С каким животным была подборка смешных видео?\nнажмите пробел после ввода ответа\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_q3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_q3',
    text: '',
    placeholder: 'Вводите сюда...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ans3"
  ans3Clock = new util.Clock();
  ansver_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ansver_3',
    text: 'правильно: обезьяна',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "cpt2_inst"
  cpt2_instClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'В этом задании вы снова будете должны реагировать на представленные буквы. Нажимайте пробел при виде любой буквы, кроме X. Если вы ее видите, ничего не делайте. В этом тесте учитывается время реакции, поэтому, пожалуйста, отвечайте как можно быстрее. Нажмите пробел, чтобы продолжить.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "cpt2_routine"
  cpt2_routineClock = new util.Clock();
  fixcross_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixcross_2',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  letter_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter_text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  responses = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  trial_counter = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_counter',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Run 'Begin Experiment' code from track_correct
  correct_counter_1 = 0;
  
  // Initialize components for Routine "end_cpt2"
  end_cpt2Clock = new util.Clock();
  thank_you_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'thank_you_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Спасибо за прохождение теста!\nДождитесь выгрузки данных',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instructionMaxDurationReached;
var _key_resp_allKeys;
var instructionMaxDuration;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructionClock.reset();
    routineTimer.reset();
    instructionMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('instruction.started', globalClock.getTime());
    instructionMaxDuration = null
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(text);
    instructionComponents.push(key_resp);
    
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction' ---
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 2 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction' ---
    instructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var cpt1_instMaxDurationReached;
var _key_resp_2_allKeys;
var cpt1_instMaxDuration;
var cpt1_instComponents;
function cpt1_instRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'cpt1_inst' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    cpt1_instClock.reset();
    routineTimer.reset();
    cpt1_instMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('cpt1_inst.started', globalClock.getTime());
    cpt1_instMaxDuration = null
    // keep track of which components have finished
    cpt1_instComponents = [];
    cpt1_instComponents.push(text_3);
    cpt1_instComponents.push(key_resp_2);
    
    cpt1_instComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function cpt1_instRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'cpt1_inst' ---
    // get current time
    t = cpt1_instClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // if text_3 is active this frame...
    if (text_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 2 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    cpt1_instComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cpt1_instRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'cpt1_inst' ---
    cpt1_instComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('cpt1_inst.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "cpt1_inst" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(cpt1_routineRoutineBegin(snapshot));
      trialsLoopScheduler.add(cpt1_routineRoutineEachFrame());
      trialsLoopScheduler.add(cpt1_routineRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var randomization;
function randomizationLoopBegin(randomizationLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    randomization = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'videorandom_for_pavl.xlsx',
      seed: undefined, name: 'randomization'
    });
    psychoJS.experiment.addLoop(randomization); // add the loop to the experiment
    currentLoop = randomization;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    randomization.forEach(function() {
      snapshot = randomization.getSnapshot();
    
      randomizationLoopScheduler.add(importConditions(snapshot));
      randomizationLoopScheduler.add(videosetRoutineBegin(snapshot));
      randomizationLoopScheduler.add(videosetRoutineEachFrame());
      randomizationLoopScheduler.add(videosetRoutineEnd(snapshot));
      randomizationLoopScheduler.add(randomizationLoopEndIteration(randomizationLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function randomizationLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(randomization);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function randomizationLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_3.forEach(function() {
      snapshot = trials_3.getSnapshot();
    
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(cpt2_routineRoutineBegin(snapshot));
      trials_3LoopScheduler.add(cpt2_routineRoutineEachFrame());
      trials_3LoopScheduler.add(cpt2_routineRoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var cpt1_routineMaxDurationReached;
var _response_allKeys;
var cpt1_routineMaxDuration;
var cpt1_routineComponents;
function cpt1_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'cpt1_routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    cpt1_routineClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    cpt1_routineMaxDurationReached = false;
    // update component parameters for each repeat
    letter_text.setText(letter);
    response.keys = undefined;
    response.rt = undefined;
    _response_allKeys = [];
    trial_counter_2.setText(((trials.thisN.toString() + "/") + trials.nTotal.toString()));
    psychoJS.experiment.addData('cpt1_routine.started', globalClock.getTime());
    cpt1_routineMaxDuration = null
    // keep track of which components have finished
    cpt1_routineComponents = [];
    cpt1_routineComponents.push(fixcross);
    cpt1_routineComponents.push(letter_text);
    cpt1_routineComponents.push(response);
    cpt1_routineComponents.push(trial_counter_2);
    
    cpt1_routineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function cpt1_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'cpt1_routine' ---
    // get current time
    t = cpt1_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixcross* updates
    if (t >= 0.0 && fixcross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixcross.tStart = t;  // (not accounting for frame time here)
      fixcross.frameNStart = frameN;  // exact frame index
      
      fixcross.setAutoDraw(true);
    }
    
    
    // if fixcross is active this frame...
    if (fixcross.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixcross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fixcross.tStop = t;  // not accounting for scr refresh
      fixcross.frameNStop = frameN;  // exact frame index
      // update status
      fixcross.status = PsychoJS.Status.FINISHED;
      fixcross.setAutoDraw(false);
    }
    
    
    // *letter_text* updates
    if (t >= 1 && letter_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_text.tStart = t;  // (not accounting for frame time here)
      letter_text.frameNStart = frameN;  // exact frame index
      
      letter_text.setAutoDraw(true);
    }
    
    
    // if letter_text is active this frame...
    if (letter_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (letter_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      letter_text.tStop = t;  // not accounting for scr refresh
      letter_text.frameNStop = frameN;  // exact frame index
      // update status
      letter_text.status = PsychoJS.Status.FINISHED;
      letter_text.setAutoDraw(false);
    }
    
    
    // *response* updates
    if (t >= 1 && response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response.tStart = t;  // (not accounting for frame time here)
      response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response.clearEvents(); });
    }
    frameRemains = 1 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      response.tStop = t;  // not accounting for scr refresh
      response.frameNStop = frameN;  // exact frame index
      // update status
      response.status = PsychoJS.Status.FINISHED;
      frameRemains = 1 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        response.tStop = t;  // not accounting for scr refresh
        response.frameNStop = frameN;  // exact frame index
        // update status
        response.status = PsychoJS.Status.FINISHED;
        response.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if response is active this frame...
      if (response.status === PsychoJS.Status.STARTED) {
        let theseKeys = response.getKeys({keyList: 'space', waitRelease: false});
        _response_allKeys = _response_allKeys.concat(theseKeys);
        if (_response_allKeys.length > 0) {
          response.keys = _response_allKeys[_response_allKeys.length - 1].name;  // just the last key pressed
          response.rt = _response_allKeys[_response_allKeys.length - 1].rt;
          response.duration = _response_allKeys[_response_allKeys.length - 1].duration;
          // was this correct?
          if (response.keys == corrAns) {
              response.corr = 1;
          } else {
              response.corr = 0;
          }
        }
      }
      
      
      // *trial_counter_2* updates
      if (t >= 0.0 && trial_counter_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        trial_counter_2.tStart = t;  // (not accounting for frame time here)
        trial_counter_2.frameNStart = frameN;  // exact frame index
        
        trial_counter_2.setAutoDraw(true);
      }
      
      
      // if trial_counter_2 is active this frame...
      if (trial_counter_2.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (trial_counter_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        trial_counter_2.tStop = t;  // not accounting for scr refresh
        trial_counter_2.frameNStop = frameN;  // exact frame index
        // update status
        trial_counter_2.status = PsychoJS.Status.FINISHED;
        trial_counter_2.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      cpt1_routineComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function cpt1_routineRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'cpt1_routine' ---
      cpt1_routineComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('cpt1_routine.stopped', globalClock.getTime());
      // was no response the correct answer?!
      if (response.keys === undefined) {
        if (['None','none',undefined].includes(corrAns)) {
           response.corr = 1;  // correct non-response
        } else {
           response.corr = 0;  // failed to respond (incorrectly)
        }
      }
      // store data for current loop
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(response.corr, level);
      }
      psychoJS.experiment.addData('response.keys', response.keys);
      psychoJS.experiment.addData('response.corr', response.corr);
      if (typeof response.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('response.rt', response.rt);
          psychoJS.experiment.addData('response.duration', response.duration);
          }
      
      response.stop();
      // Run 'End Routine' code from track_correct_2
      if ((response.keys && (corrAns === "space"))) {
          correct_counter += 1;
      }
      if (((! response.keys) && (corrAns !== "space"))) {
          correct_counter += 1;
      }
      
      if (routineForceEnded) {
          routineTimer.reset();} else if (cpt1_routineMaxDurationReached) {
          cpt1_routineClock.add(cpt1_routineMaxDuration);
      } else {
          cpt1_routineClock.add(2.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var end_cpt1MaxDurationReached;
var _key_resp_3_allKeys;
var end_cpt1MaxDuration;
var end_cpt1Components;
function end_cpt1RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'end_cpt1' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      end_cpt1Clock.reset();
      routineTimer.reset();
      end_cpt1MaxDurationReached = false;
      // update component parameters for each repeat
      thank_you.setText(((((("\u0422\u0432\u043e\u0439 \u0441\u0447\u0435\u0442 " + correct_counter.toString()) + "/") + trials.nTotal.toString()) + "\u0432\u0435\u0440\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432!") + "\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043f\u0440\u043e\u0431\u0435\u043b \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"));
      key_resp_3.keys = undefined;
      key_resp_3.rt = undefined;
      _key_resp_3_allKeys = [];
      psychoJS.experiment.addData('end_cpt1.started', globalClock.getTime());
      end_cpt1MaxDuration = null
      // keep track of which components have finished
      end_cpt1Components = [];
      end_cpt1Components.push(thank_you);
      end_cpt1Components.push(key_resp_3);
      
      end_cpt1Components.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function end_cpt1RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'end_cpt1' ---
      // get current time
      t = end_cpt1Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *thank_you* updates
      if (t >= 0.0 && thank_you.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        thank_you.tStart = t;  // (not accounting for frame time here)
        thank_you.frameNStart = frameN;  // exact frame index
        
        thank_you.setAutoDraw(true);
      }
      
      
      // if thank_you is active this frame...
      if (thank_you.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_3* updates
      if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_3.tStart = t;  // (not accounting for frame time here)
        key_resp_3.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
      }
      
      // if key_resp_3 is active this frame...
      if (key_resp_3.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_3.getKeys({keyList: 'space', waitRelease: false});
        _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
        if (_key_resp_3_allKeys.length > 0) {
          key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
          key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
          key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      end_cpt1Components.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function end_cpt1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'end_cpt1' ---
      end_cpt1Components.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('end_cpt1.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_3.corr, level);
      }
      psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
      if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
          psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
          routineTimer.reset();
          }
      
      key_resp_3.stop();
      // the Routine "end_cpt1" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var infoMaxDurationReached;
var infoMaxDuration;
var infoComponents;
function infoRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'info' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      infoClock.reset(routineTimer.getTime());
      routineTimer.add(1.000000);
      infoMaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('info.started', globalClock.getTime());
      infoMaxDuration = null
      // keep track of which components have finished
      infoComponents = [];
      infoComponents.push(text_8);
      
      infoComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function infoRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'info' ---
      // get current time
      t = infoClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_8* updates
      if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_8.tStart = t;  // (not accounting for frame time here)
        text_8.frameNStart = frameN;  // exact frame index
        
        text_8.setAutoDraw(true);
      }
      
      
      // if text_8 is active this frame...
      if (text_8.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_8.tStop = t;  // not accounting for scr refresh
        text_8.frameNStop = frameN;  // exact frame index
        // update status
        text_8.status = PsychoJS.Status.FINISHED;
        text_8.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      infoComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function infoRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'info' ---
      infoComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('info.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (infoMaxDurationReached) {
          infoClock.add(infoMaxDuration);
      } else {
          infoClock.add(1.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var videosetMaxDurationReached;
var videosetMaxDuration;
var videosetComponents;
function videosetRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'videoset' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      videosetClock.reset();
      routineTimer.reset();
      videosetMaxDurationReached = false;
      // update component parameters for each repeat
      vidosiki.setMovie(videos);
      psychoJS.experiment.addData('videoset.started', globalClock.getTime());
      videosetMaxDuration = null
      // keep track of which components have finished
      videosetComponents = [];
      videosetComponents.push(vidosiki);
      
      videosetComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function videosetRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'videoset' ---
      // get current time
      t = videosetClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *vidosiki* updates
      if (t >= 0.0 && vidosiki.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        vidosiki.tStart = t;  // (not accounting for frame time here)
        vidosiki.frameNStart = frameN;  // exact frame index
        
        vidosiki.setAutoDraw(true);
        vidosiki.play();
      }
      
      if (vidosiki.status === PsychoJS.Status.FINISHED) {  // force-end the Routine
          continueRoutine = false;
      }
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      videosetComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function videosetRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'videoset' ---
      videosetComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('videoset.stopped', globalClock.getTime());
      vidosiki.stop();  // ensure movie has stopped at end of Routine
      // the Routine "videoset" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var qesfun1MaxDurationReached;
var _key_resp_8_allKeys;
var qesfun1MaxDuration;
var qesfun1Components;
function qesfun1RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'qesfun1' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      qesfun1Clock.reset();
      routineTimer.reset();
      qesfun1MaxDurationReached = false;
      // update component parameters for each repeat
      textbox_q1.setText('');
      textbox_q1.refresh();
      key_resp_8.keys = undefined;
      key_resp_8.rt = undefined;
      _key_resp_8_allKeys = [];
      psychoJS.experiment.addData('qesfun1.started', globalClock.getTime());
      qesfun1MaxDuration = null
      // keep track of which components have finished
      qesfun1Components = [];
      qesfun1Components.push(text_4);
      qesfun1Components.push(textbox_q1);
      qesfun1Components.push(key_resp_8);
      
      qesfun1Components.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function qesfun1RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'qesfun1' ---
      // get current time
      t = qesfun1Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_4* updates
      if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_4.tStart = t;  // (not accounting for frame time here)
        text_4.frameNStart = frameN;  // exact frame index
        
        text_4.setAutoDraw(true);
      }
      
      
      // if text_4 is active this frame...
      if (text_4.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *textbox_q1* updates
      if (t >= 0.0 && textbox_q1.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        textbox_q1.tStart = t;  // (not accounting for frame time here)
        textbox_q1.frameNStart = frameN;  // exact frame index
        
        textbox_q1.setAutoDraw(true);
      }
      
      
      // if textbox_q1 is active this frame...
      if (textbox_q1.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_8* updates
      if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_8.tStart = t;  // (not accounting for frame time here)
        key_resp_8.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
      }
      
      // if key_resp_8 is active this frame...
      if (key_resp_8.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_8.getKeys({keyList: 'space', waitRelease: false});
        _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
        if (_key_resp_8_allKeys.length > 0) {
          key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
          key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
          key_resp_8.duration = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      qesfun1Components.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function qesfun1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'qesfun1' ---
      qesfun1Components.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('qesfun1.stopped', globalClock.getTime());
      psychoJS.experiment.addData('textbox_q1.text',textbox_q1.text)
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_8.corr, level);
      }
      psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
      if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
          psychoJS.experiment.addData('key_resp_8.duration', key_resp_8.duration);
          routineTimer.reset();
          }
      
      key_resp_8.stop();
      // the Routine "qesfun1" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var ans1MaxDurationReached;
var ans1MaxDuration;
var ans1Components;
function ans1RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'ans1' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      ans1Clock.reset(routineTimer.getTime());
      routineTimer.add(1.000000);
      ans1MaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('ans1.started', globalClock.getTime());
      ans1MaxDuration = null
      // keep track of which components have finished
      ans1Components = [];
      ans1Components.push(ansver_1);
      
      ans1Components.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function ans1RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'ans1' ---
      // get current time
      t = ans1Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *ansver_1* updates
      if (t >= 0.0 && ansver_1.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        ansver_1.tStart = t;  // (not accounting for frame time here)
        ansver_1.frameNStart = frameN;  // exact frame index
        
        ansver_1.setAutoDraw(true);
      }
      
      
      // if ansver_1 is active this frame...
      if (ansver_1.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (ansver_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        ansver_1.tStop = t;  // not accounting for scr refresh
        ansver_1.frameNStop = frameN;  // exact frame index
        // update status
        ansver_1.status = PsychoJS.Status.FINISHED;
        ansver_1.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      ans1Components.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function ans1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'ans1' ---
      ans1Components.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('ans1.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (ans1MaxDurationReached) {
          ans1Clock.add(ans1MaxDuration);
      } else {
          ans1Clock.add(1.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var qesfun2MaxDurationReached;
var _key_resp_4_allKeys;
var qesfun2MaxDuration;
var qesfun2Components;
function qesfun2RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'qesfun2' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      qesfun2Clock.reset();
      routineTimer.reset();
      qesfun2MaxDurationReached = false;
      // update component parameters for each repeat
      textbox_q2.setText('');
      textbox_q2.refresh();
      key_resp_4.keys = undefined;
      key_resp_4.rt = undefined;
      _key_resp_4_allKeys = [];
      psychoJS.experiment.addData('qesfun2.started', globalClock.getTime());
      qesfun2MaxDuration = null
      // keep track of which components have finished
      qesfun2Components = [];
      qesfun2Components.push(textbox_q2);
      qesfun2Components.push(text_6);
      qesfun2Components.push(key_resp_4);
      
      qesfun2Components.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function qesfun2RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'qesfun2' ---
      // get current time
      t = qesfun2Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *textbox_q2* updates
      if (t >= 0.0 && textbox_q2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        textbox_q2.tStart = t;  // (not accounting for frame time here)
        textbox_q2.frameNStart = frameN;  // exact frame index
        
        textbox_q2.setAutoDraw(true);
      }
      
      
      // if textbox_q2 is active this frame...
      if (textbox_q2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *text_6* updates
      if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_6.tStart = t;  // (not accounting for frame time here)
        text_6.frameNStart = frameN;  // exact frame index
        
        text_6.setAutoDraw(true);
      }
      
      
      // if text_6 is active this frame...
      if (text_6.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_4* updates
      if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_4.tStart = t;  // (not accounting for frame time here)
        key_resp_4.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
      }
      
      // if key_resp_4 is active this frame...
      if (key_resp_4.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_4.getKeys({keyList: 'space', waitRelease: false});
        _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
        if (_key_resp_4_allKeys.length > 0) {
          key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
          key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
          key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      qesfun2Components.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function qesfun2RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'qesfun2' ---
      qesfun2Components.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('qesfun2.stopped', globalClock.getTime());
      psychoJS.experiment.addData('textbox_q2.text',textbox_q2.text)
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_4.corr, level);
      }
      psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
      if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
          psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
          routineTimer.reset();
          }
      
      key_resp_4.stop();
      // the Routine "qesfun2" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var ans2MaxDurationReached;
var ans2MaxDuration;
var ans2Components;
function ans2RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'ans2' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      ans2Clock.reset(routineTimer.getTime());
      routineTimer.add(1.000000);
      ans2MaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('ans2.started', globalClock.getTime());
      ans2MaxDuration = null
      // keep track of which components have finished
      ans2Components = [];
      ans2Components.push(ansver_2);
      
      ans2Components.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function ans2RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'ans2' ---
      // get current time
      t = ans2Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *ansver_2* updates
      if (t >= 0.0 && ansver_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        ansver_2.tStart = t;  // (not accounting for frame time here)
        ansver_2.frameNStart = frameN;  // exact frame index
        
        ansver_2.setAutoDraw(true);
      }
      
      
      // if ansver_2 is active this frame...
      if (ansver_2.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (ansver_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        ansver_2.tStop = t;  // not accounting for scr refresh
        ansver_2.frameNStop = frameN;  // exact frame index
        // update status
        ansver_2.status = PsychoJS.Status.FINISHED;
        ansver_2.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      ans2Components.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function ans2RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'ans2' ---
      ans2Components.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('ans2.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (ans2MaxDurationReached) {
          ans2Clock.add(ans2MaxDuration);
      } else {
          ans2Clock.add(1.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var qesfun3MaxDurationReached;
var _key_resp_9_allKeys;
var qesfun3MaxDuration;
var qesfun3Components;
function qesfun3RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'qesfun3' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      qesfun3Clock.reset();
      routineTimer.reset();
      qesfun3MaxDurationReached = false;
      // update component parameters for each repeat
      textbox_q3.setText('');
      textbox_q3.refresh();
      key_resp_9.keys = undefined;
      key_resp_9.rt = undefined;
      _key_resp_9_allKeys = [];
      psychoJS.experiment.addData('qesfun3.started', globalClock.getTime());
      qesfun3MaxDuration = null
      // keep track of which components have finished
      qesfun3Components = [];
      qesfun3Components.push(text_7);
      qesfun3Components.push(textbox_q3);
      qesfun3Components.push(key_resp_9);
      
      qesfun3Components.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function qesfun3RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'qesfun3' ---
      // get current time
      t = qesfun3Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_7* updates
      if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_7.tStart = t;  // (not accounting for frame time here)
        text_7.frameNStart = frameN;  // exact frame index
        
        text_7.setAutoDraw(true);
      }
      
      
      // if text_7 is active this frame...
      if (text_7.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *textbox_q3* updates
      if (t >= 0.0 && textbox_q3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        textbox_q3.tStart = t;  // (not accounting for frame time here)
        textbox_q3.frameNStart = frameN;  // exact frame index
        
        textbox_q3.setAutoDraw(true);
      }
      
      
      // if textbox_q3 is active this frame...
      if (textbox_q3.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_9* updates
      if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_9.tStart = t;  // (not accounting for frame time here)
        key_resp_9.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
      }
      
      // if key_resp_9 is active this frame...
      if (key_resp_9.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_9.getKeys({keyList: 'space', waitRelease: false});
        _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
        if (_key_resp_9_allKeys.length > 0) {
          key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
          key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
          key_resp_9.duration = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      qesfun3Components.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function qesfun3RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'qesfun3' ---
      qesfun3Components.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('qesfun3.stopped', globalClock.getTime());
      psychoJS.experiment.addData('textbox_q3.text',textbox_q3.text)
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_9.corr, level);
      }
      psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
      if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
          psychoJS.experiment.addData('key_resp_9.duration', key_resp_9.duration);
          routineTimer.reset();
          }
      
      key_resp_9.stop();
      // the Routine "qesfun3" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var ans3MaxDurationReached;
var ans3MaxDuration;
var ans3Components;
function ans3RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'ans3' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      ans3Clock.reset(routineTimer.getTime());
      routineTimer.add(1.000000);
      ans3MaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('ans3.started', globalClock.getTime());
      ans3MaxDuration = null
      // keep track of which components have finished
      ans3Components = [];
      ans3Components.push(ansver_3);
      
      ans3Components.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function ans3RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'ans3' ---
      // get current time
      t = ans3Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *ansver_3* updates
      if (t >= 0.0 && ansver_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        ansver_3.tStart = t;  // (not accounting for frame time here)
        ansver_3.frameNStart = frameN;  // exact frame index
        
        ansver_3.setAutoDraw(true);
      }
      
      
      // if ansver_3 is active this frame...
      if (ansver_3.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (ansver_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        ansver_3.tStop = t;  // not accounting for scr refresh
        ansver_3.frameNStop = frameN;  // exact frame index
        // update status
        ansver_3.status = PsychoJS.Status.FINISHED;
        ansver_3.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      ans3Components.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function ans3RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'ans3' ---
      ans3Components.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('ans3.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (ans3MaxDurationReached) {
          ans3Clock.add(ans3MaxDuration);
      } else {
          ans3Clock.add(1.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var cpt2_instMaxDurationReached;
var _key_resp_6_allKeys;
var cpt2_instMaxDuration;
var cpt2_instComponents;
function cpt2_instRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'cpt2_inst' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      cpt2_instClock.reset();
      routineTimer.reset();
      cpt2_instMaxDurationReached = false;
      // update component parameters for each repeat
      key_resp_6.keys = undefined;
      key_resp_6.rt = undefined;
      _key_resp_6_allKeys = [];
      psychoJS.experiment.addData('cpt2_inst.started', globalClock.getTime());
      cpt2_instMaxDuration = null
      // keep track of which components have finished
      cpt2_instComponents = [];
      cpt2_instComponents.push(text_5);
      cpt2_instComponents.push(key_resp_6);
      
      cpt2_instComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function cpt2_instRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'cpt2_inst' ---
      // get current time
      t = cpt2_instClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_5* updates
      if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_5.tStart = t;  // (not accounting for frame time here)
        text_5.frameNStart = frameN;  // exact frame index
        
        text_5.setAutoDraw(true);
      }
      
      
      // if text_5 is active this frame...
      if (text_5.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_6* updates
      if (t >= 2 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_6.tStart = t;  // (not accounting for frame time here)
        key_resp_6.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
      }
      
      // if key_resp_6 is active this frame...
      if (key_resp_6.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_6.getKeys({keyList: 'space', waitRelease: false});
        _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
        if (_key_resp_6_allKeys.length > 0) {
          key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
          key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
          key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      cpt2_instComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function cpt2_instRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'cpt2_inst' ---
      cpt2_instComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('cpt2_inst.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_6.corr, level);
      }
      psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
      if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
          psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
          routineTimer.reset();
          }
      
      key_resp_6.stop();
      // the Routine "cpt2_inst" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var cpt2_routineMaxDurationReached;
var _responses_allKeys;
var cpt2_routineMaxDuration;
var cpt2_routineComponents;
function cpt2_routineRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'cpt2_routine' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      cpt2_routineClock.reset(routineTimer.getTime());
      routineTimer.add(2.000000);
      cpt2_routineMaxDurationReached = false;
      // update component parameters for each repeat
      letter_text_2.setText(letter);
      responses.keys = undefined;
      responses.rt = undefined;
      _responses_allKeys = [];
      trial_counter.setText(((trials_3.thisN.toString() + "/") + trials_3.nTotal.toString()));
      psychoJS.experiment.addData('cpt2_routine.started', globalClock.getTime());
      cpt2_routineMaxDuration = null
      // keep track of which components have finished
      cpt2_routineComponents = [];
      cpt2_routineComponents.push(fixcross_2);
      cpt2_routineComponents.push(letter_text_2);
      cpt2_routineComponents.push(responses);
      cpt2_routineComponents.push(trial_counter);
      
      cpt2_routineComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function cpt2_routineRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'cpt2_routine' ---
      // get current time
      t = cpt2_routineClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *fixcross_2* updates
      if (t >= 0.0 && fixcross_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        fixcross_2.tStart = t;  // (not accounting for frame time here)
        fixcross_2.frameNStart = frameN;  // exact frame index
        
        fixcross_2.setAutoDraw(true);
      }
      
      
      // if fixcross_2 is active this frame...
      if (fixcross_2.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (fixcross_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        fixcross_2.tStop = t;  // not accounting for scr refresh
        fixcross_2.frameNStop = frameN;  // exact frame index
        // update status
        fixcross_2.status = PsychoJS.Status.FINISHED;
        fixcross_2.setAutoDraw(false);
      }
      
      
      // *letter_text_2* updates
      if (t >= 1 && letter_text_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        letter_text_2.tStart = t;  // (not accounting for frame time here)
        letter_text_2.frameNStart = frameN;  // exact frame index
        
        letter_text_2.setAutoDraw(true);
      }
      
      
      // if letter_text_2 is active this frame...
      if (letter_text_2.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 1 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (letter_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        letter_text_2.tStop = t;  // not accounting for scr refresh
        letter_text_2.frameNStop = frameN;  // exact frame index
        // update status
        letter_text_2.status = PsychoJS.Status.FINISHED;
        letter_text_2.setAutoDraw(false);
      }
      
      
      // *responses* updates
      if (t >= 1 && responses.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        responses.tStart = t;  // (not accounting for frame time here)
        responses.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { responses.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { responses.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { responses.clearEvents(); });
      }
      frameRemains = 1 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (responses.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        responses.tStop = t;  // not accounting for scr refresh
        responses.frameNStop = frameN;  // exact frame index
        // update status
        responses.status = PsychoJS.Status.FINISHED;
        frameRemains = 1 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (responses.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          responses.tStop = t;  // not accounting for scr refresh
          responses.frameNStop = frameN;  // exact frame index
          // update status
          responses.status = PsychoJS.Status.FINISHED;
          responses.status = PsychoJS.Status.FINISHED;
            }
          
        }
        
        // if responses is active this frame...
        if (responses.status === PsychoJS.Status.STARTED) {
          let theseKeys = responses.getKeys({keyList: 'space', waitRelease: false});
          _responses_allKeys = _responses_allKeys.concat(theseKeys);
          if (_responses_allKeys.length > 0) {
            responses.keys = _responses_allKeys[_responses_allKeys.length - 1].name;  // just the last key pressed
            responses.rt = _responses_allKeys[_responses_allKeys.length - 1].rt;
            responses.duration = _responses_allKeys[_responses_allKeys.length - 1].duration;
            // was this correct?
            if (responses.keys == corrAns) {
                responses.corr = 1;
            } else {
                responses.corr = 0;
            }
          }
        }
        
        
        // *trial_counter* updates
        if (t >= 0.0 && trial_counter.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          trial_counter.tStart = t;  // (not accounting for frame time here)
          trial_counter.frameNStart = frameN;  // exact frame index
          
          trial_counter.setAutoDraw(true);
        }
        
        
        // if trial_counter is active this frame...
        if (trial_counter.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (trial_counter.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          trial_counter.tStop = t;  // not accounting for scr refresh
          trial_counter.frameNStop = frameN;  // exact frame index
          // update status
          trial_counter.status = PsychoJS.Status.FINISHED;
          trial_counter.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        cpt2_routineComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function cpt2_routineRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'cpt2_routine' ---
        cpt2_routineComponents.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('cpt2_routine.stopped', globalClock.getTime());
        // was no response the correct answer?!
        if (responses.keys === undefined) {
          if (['None','none',undefined].includes(corrAns)) {
             responses.corr = 1;  // correct non-response
          } else {
             responses.corr = 0;  // failed to respond (incorrectly)
          }
        }
        // store data for current loop
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(responses.corr, level);
        }
        psychoJS.experiment.addData('responses.keys', responses.keys);
        psychoJS.experiment.addData('responses.corr', responses.corr);
        if (typeof responses.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('responses.rt', responses.rt);
            psychoJS.experiment.addData('responses.duration', responses.duration);
            }
        
        responses.stop();
        // Run 'End Routine' code from track_correct
        if ((responses.keys && (corrAns === "space"))) {
            correct_counter_1 += 1;
        }
        if (((! responses.keys) && (corrAns !== "space"))) {
            correct_counter_1 += 1;
        }
        
        if (routineForceEnded) {
            routineTimer.reset();} else if (cpt2_routineMaxDurationReached) {
            cpt2_routineClock.add(cpt2_routineMaxDuration);
        } else {
            cpt2_routineClock.add(2.000000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var end_cpt2MaxDurationReached;
var _key_resp_7_allKeys;
var end_cpt2MaxDuration;
var end_cpt2Components;
function end_cpt2RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'end_cpt2' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        end_cpt2Clock.reset();
        routineTimer.reset();
        end_cpt2MaxDurationReached = false;
        // update component parameters for each repeat
        thank_you_2.setText(((((("\u0422\u0432\u043e\u0439 \u0441\u0447\u0435\u0442 " + correct_counter_1.toString()) + "/") + trials.nTotal.toString()) + " \u0432\u0435\u0440\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432!") + "\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043f\u0440\u043e\u0431\u0435\u043b \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"));
        key_resp_7.keys = undefined;
        key_resp_7.rt = undefined;
        _key_resp_7_allKeys = [];
        psychoJS.experiment.addData('end_cpt2.started', globalClock.getTime());
        end_cpt2MaxDuration = null
        // keep track of which components have finished
        end_cpt2Components = [];
        end_cpt2Components.push(thank_you_2);
        end_cpt2Components.push(key_resp_7);
        
        end_cpt2Components.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function end_cpt2RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'end_cpt2' ---
        // get current time
        t = end_cpt2Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *thank_you_2* updates
        if (t >= 0.0 && thank_you_2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          thank_you_2.tStart = t;  // (not accounting for frame time here)
          thank_you_2.frameNStart = frameN;  // exact frame index
          
          thank_you_2.setAutoDraw(true);
        }
        
        
        // if thank_you_2 is active this frame...
        if (thank_you_2.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *key_resp_7* updates
        if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          key_resp_7.tStart = t;  // (not accounting for frame time here)
          key_resp_7.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
        }
        
        // if key_resp_7 is active this frame...
        if (key_resp_7.status === PsychoJS.Status.STARTED) {
          let theseKeys = key_resp_7.getKeys({keyList: 'space', waitRelease: false});
          _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
          if (_key_resp_7_allKeys.length > 0) {
            key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
            key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
            key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        end_cpt2Components.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function end_cpt2RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'end_cpt2' ---
        end_cpt2Components.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('end_cpt2.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(key_resp_7.corr, level);
        }
        psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
        if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
            psychoJS.experiment.addData('key_resp_7.duration', key_resp_7.duration);
            routineTimer.reset();
            }
        
        key_resp_7.stop();
        // the Routine "end_cpt2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'end' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        endClock.reset(routineTimer.getTime());
        routineTimer.add(5.000000);
        endMaxDurationReached = false;
        // update component parameters for each repeat
        psychoJS.experiment.addData('end.started', globalClock.getTime());
        endMaxDuration = null
        // keep track of which components have finished
        endComponents = [];
        endComponents.push(text_2);
        
        endComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function endRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'end' ---
        // get current time
        t = endClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_2* updates
        if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_2.tStart = t;  // (not accounting for frame time here)
          text_2.frameNStart = frameN;  // exact frame index
          
          text_2.setAutoDraw(true);
        }
        
        
        // if text_2 is active this frame...
        if (text_2.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_2.tStop = t;  // not accounting for scr refresh
          text_2.frameNStop = frameN;  // exact frame index
          // update status
          text_2.status = PsychoJS.Status.FINISHED;
          text_2.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        endComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function endRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'end' ---
        endComponents.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('end.stopped', globalClock.getTime());
        if (routineForceEnded) {
            routineTimer.reset();} else if (endMaxDurationReached) {
            endClock.add(endMaxDuration);
        } else {
            endClock.add(5.000000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
function importConditions(currentLoop) {
      return async function () {
        psychoJS.importAttributes(currentLoop.getCurrentTrial());
        return Scheduler.Event.NEXT;
        };
    }
    
    
async function quitPsychoJS(message, isCompleted) {
      // Check for and save orphaned data
      if (psychoJS.experiment.isEntryEmpty()) {
        psychoJS.experiment.nextEntry();
      }
      psychoJS.window.close();
      psychoJS.quit({message: message, isCompleted: isCompleted});
      
      return Scheduler.Event.QUIT;
    }
