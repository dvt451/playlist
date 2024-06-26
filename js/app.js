(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    const burgerButton = document.querySelector(".icon-burger");
    const burgerBody = document.querySelector(".playlist__songs");
    burgerButton.addEventListener("click", (function(e) {
        burgerButton.classList.toggle("menu-open");
        burgerBody.classList.toggle("_active-playlist");
        document.body.classList.toggle("_body-active");
    }));
    const singerName = document.querySelector(".header-player__singer");
    const songName = document.querySelector(".header-player__name");
    document.querySelector(".header-player__cataloge");
    const backgroundImg = document.querySelector(".player__background");
    const frontImg = document.querySelector(".body-player__picture");
    let musicNumber = 0;
    const previousButton = document.querySelector(".previous");
    const nextButton = document.querySelector(".next");
    const playButton = document.querySelector(".play");
    let playPause = false;
    const songList = document.querySelector(".songs__list");
    const songBar = document.querySelector(".footer-player-bar__range-input");
    const songCurrentTime = document.querySelector(".footer-player-bar__current-duration");
    const songDurationTime = document.querySelector(".footer-player-bar__total-duration");
    const backward10 = document.querySelector(".backward10");
    const forward10 = document.querySelector(".forward10");
    const fastButton = document.querySelector(".fastlybutt");
    const slowButton = document.querySelector(".slowlybutt");
    const breakpointA = document.querySelector(".body-player-footer__a");
    const breakpointB = document.querySelector(".body-player-footer__b");
    const breakpointDash = document.querySelector(".body-player-footer__dash");
    const repeatButton = document.querySelector(".repeat");
    const playerDisplay = document.querySelector(".body-player__display");
    const lyrics = document.querySelector(".body-player__lyrics");
    const lyricsText = document.querySelector(".body-player__lyrics-text");
    const volumeMute = document.querySelector(".footer-player-volume__bbtn");
    const songNumeration = document.querySelector(".footer-player-bar__song-number");
    const shuffleButton = document.querySelector(".footer-player-options__bbtn");
    document.querySelector(".songs-header__input");
    const songsHeading__singer = document.querySelector(".songs-heading__singer");
    const songsHeading__songName = document.querySelector(".songs-heading__song-name");
    const ratingVlueHtml = document.querySelector(".rating__value");
    const ratings = document.querySelectorAll(".rating");
    if (ratings.length > 0) initRatings();
    let itemSong;
    const breakpoints = document.querySelector(".breakpoints");
    let A = 0;
    let B = 0;
    let breakPointChechker = 0;
    let checked = false;
    let songItem;
    let AllSongs = [ {
        singer: "The Black Eyed Peas",
        name: "Lets Get It Started",
        picture: "./img/poster.webp",
        lyrics: `Let's get it started, in hereAnd the base keep runnin' runnin', and runnin' runnin', and runnin' runnin', and runnin' runnin', andRunnin' runnin', and runnin' runnin', and runnin' runnin', and runnin' runnin', andIn this context, there's no disrespect, soWhen I bust my rhyme, you break your necksWe got five minutes for us to disconnectFrom all intellect collect the rhythm effectObstacles are inefficient, follow your intuitionFree your inner soul and break away from traditionCoz when we beat out, girl it's pullin' withoutYou wouldn't believe how we wow shit outBurn it till it's burned outTurn it till it's turned outAct up from north, west, east, southEverybody, everybody, let's get into itGet stupidGet it started, get it started, get it startedLet's get it started (ha), let's get it started in hereLet's get it started (ha), let's get it started in hereLet's get it started (ha), let's get it started in hereLet's get it started (ha), let's get it started in hereYeahLose control, of body and soulDon't move too fast, people, just take it slowDon't get ahead, just jump into itY'all hear about it, the Peas'll do itGet stutted, get stupidYou'll want me body people will walk you through itStep by step, like you're into new kidInch by inch with the new solutionTransmit hits, with no delusionThe feeling's irresistible and that's how we movin'Everybody, everybody, let's get into itGet stupidGet it started, get it started, get it startedLet's get it started (ha), let's get it started in hereLet's get it started (ha), let's get it started in hereLet's get it started (ha), let's get it started in hereLet's get it started (ha), let's get it started in hereYeahRunnin' runnin', and runnin' runnin', and runnin' runnin', and runnin runnin' andC'mon y'all, let's get koo-koo, uh-huhLet's get koo-koo (in here)I like it koo-koo, uh-huh, let's get koo-koo (in here)I like it koo-koo, uh-huh, let's get koo-koo (in here) oh, oh, ohYa, ya, ya, ya, ya, ya, ya, ya, ya, ya, ya, ya, ya, ya, yaLet's get ill, that's the dealAt the gate, we'll bring the bugged-out drill (just)Lose your mind this is the timeY'all test this drill, just and bang your spine (just)Bob your head like me APL de, up inside your club or in your BentleyGet messy, loud and sickY'all mount past slow mo in another head trip (so)Come then now do not correct it, let's get ignant let's get hecticEverybody, everybody, let's get into itGet stupidGet it started, get it started, get it startedLet's get it started (ha), let's get it started in hereLet's get it started (ha), let's get it started in hereLet's get it started (ha), let's get it started in hereLet's get it started (ha), let's get it started in here, yeahKoo-koo ah ah ah Koo-koo (in here) let's get koo-koo Koo-koo (in here)Koo-koo ah ah Koo-koo (in here) ah ah ah, ow, ow, owYa, ya, ya, ya, ya, ya, ya, ya, ya, ya, ya, ya, ya, ya, yaRunnin' runnin', and runnin' runnin', and runnin' runnin', and runnin' runnin', and runnin' runnin'`,
        song: "./audio/The Black Eyed Peas - Let s get It started.mp3",
        rate: 4.1
    }, {
        singer: "Big Zuu D Double E",
        name: "Variation",
        picture: "./img/variation.webp",
        lyrics: `[Verse 1: Big Zuu]Uh, givin' the spiel, givin' the lowdownCan't lie, keepin' it real, I can't slow downGrew up on Nas, it weren't "Old Town"I'm the BFG, it ain't Roald Dahl (Truss)I got the hash, bro's got the So-Cal (Woo)Know it's only Ws like Joe Cal' (Win, win)Barge man down and it's no foul'Cause I came from the gutter like I bowled out (Woo)I been me, I never sold out (Nah)But I could tell you 'bout the shows that I sold outI made a lane, I have my own routeGood girls wanna settle down and the hoes shout (Hoes, hoes)I ain't tryna throw clout (Truss)Cah man got a whole soundSee the talent from young like a pro scoutPut in the work but I feel like I'm on the most now, uh[Chorus: Big Zuu]Givе 'em a variationB, I know I'm a bare creationMadе my way, we get the pacingGot a one yard, I might let the babes inBack's nice, the neck's amazingBut it feels better when I got cheques I'm raisingOn fire, I get to blazingGet high, work hard, the rest awaitingGive my best, there's no debatingOn the level, man, I never been close to basicCame from the that and I rose to greatnessWhen I did it with my dargs, they know the facesBlack Lives Matter, expose the racistsThey don't wanna see the people from ends go make itOpportunity in the charts, can't waste itMan, I did it on my own, I don't copy and paste shit[Verse 2: D Double E]Oh my God, Bidi-bop-bopI got the game on lock, cuz (Lock)Trust from young I've been hot, cuz (Pepper)Bumble bee I stay with the buzzNever sold out, not me, cuz (Not me)I don't know 'bout them type of ting there (Nah)Them CDs woulda got fling 'way (Fling)Man know me no like them ting there (Ooh, ooh)Bidi-bop-bopStraight from the gutter, boy (Gutter)Getting that bread and butter, boy (Butter)Talk up, there's no time to stutter, boy (What you saying?)Some of them'll call man lover boyHe's not the plug, he's the other boyDon't worry 'bout him, he's a saveloy (Dickhead)Trust me, he knows I'm a badder boy (Ooh, ooh)[Chorus: Big Zuu]Give 'em a variationB, I know I'm a bare creationMade my way, we get the pacingGot a one yard, I might let the babes inBack's nice, the neck's amazingBut it feels better when I got cheques I'm raisingOn fire, I get to blazingGet high, work hard, the rest awaitingGive my best, there's no debatingOn the level, man, I never been close to basicCame from the that and I rose to greatnessWhen I did it with my dargs, they know the facesBlack Lives Matter, expose the racistsThey don't wanna see the people from ends go make itOpportunity in the charts, can't waste itMan, I did it on my own, I don't copy and paste shit[Verse 3: Big Zuu]On a wave they can't undo (Nah)Took back the game, I came, they see me run through (Truss)That yute's now grown, so I do what I must doDid it on my own, who can say that they buss Zuu? (Who?)It's been grime from way backI took Ls, but now I don't see the wins stopSo I'm like Rick Ross in a Maybach (Skrrt)I'm a young GOAT, I can say thatBut you can't jerk my style (Nah, nah)Check the profile, put in work for a whileWhere I'm from, see, it's bittersweetBut we still smile through the painNow I'm tryna get the money in a pile (Ching-ching)Make a sweet one turn vileThem man act like they're wildDeep down, man, I know they snitch on trialIt's only MP3s where my name's on a file, uh[Chorus: Big Zuu]Give 'em a variationB, I know I'm a bare creationMade my way, we get the pacingGot a one yard, I might let the babes inBack's nice, the neck's amazingBut it feels better when I got cheques I'm raisingOn fire, I get to blazingGet high, work hard, the rest awaitingGive my best, there's no debatingOn the level, man, I never been close to basicCame from the that and I rose to greatnessWhen I did it with my dargs, they know the facesBlack Lives Matter, expose the racistsThey don't wanna see the people from ends go make itOpportunity in the charts, can't waste itMan, I did it on my own, I don't copy and paste shit`,
        song: "./audio/Big_Zuu_D_Double_E_-_Variation.mp3",
        rate: 4.5
    }, {
        singer: "Charles Aznavour",
        name: "Je mvoyais deja",
        catalogeName: "Hip-hop",
        lyrics: `A dix huit ans j'ai quitte ma provinceBien décide a empoigne la vieLe coeur léger et le bagage minceJ'étais certain de conquérir ParisChez le tailleur le plus chic j'ai fait faireCe complet bleu qu'était du dernier criLes photos, les chansons et les orchestrationsOnt eu raison de mes économiesJe me voyais déjà en haut de l'afficheEn dix fois plus gros que n'importe qui mon nom s'étalaitJe me voyais déjà adule et richeSignant mes photos aux admirateurs qui se bousculaientJ'étais le plus grand des grands fantaisistesFaisant un succès si grand que les gens m'acclamaient deboutJe me voyais déjà cherchant dans ma listeCelle qui le soir pourrait par faveur se pendre a mon couMes traits ont vieilli sous mon maquillageMais la voix est la, le geste est précis et j'ai du ressortMon coeur s'est aigri un peu, en prenant de l'âgeMais j'ai des idées, je connais mon métier et j'y crois encoreRien que sous mes pieds, de sentir la scèneDe voir devant moi un public assis, j'ai le coeur battantOn m'a pas aide, je n'ai pas eu de veineMais au fond de moi, je suis sur au moins que j'ai du talentMon complet bleu, il y a trente ans que je le porteEt mes chansons ne font rire que moiJe cours le cachet, je fais du porte a portePour subsister, je fais n'importe quoiJe n'ai connu que des succès facilesDes trains de nuit et des filles a soldatsLes minables cachets, les valises a porterLes petits meubles et les maigres repasJe me voyais déjà en photographieAu bras d'une star, l'hiver dans la neige, l'été au soleilJe me voyais déjà racontant ma vieL'air desabuse a des débutants friands de conseilsJ'ouvrais calmement les soirs de premièreMille télégrammes de ce tout paris qui nous fait si peurEt mourant de trac devant ce parterreEntrer sur la scène sous les ovations et les projecteursJ'ai tout essaye pourtant pour sortir du nombreJ'ai chante l'amour, j'ai fait du comique et de la fantaisieSi tout a rate pour moi, si je suis dans l'ombreCe n'est pas de ma faute, mais celle du public qui n'a rien comprisOn ne m'a jamais accorde ma chanceD'autres ont réussi avec peu de voix et beaucoup d'argentMoi j'étais trop pur ou trop en avanceMais un jour viendra je leur montrerai que j'ai du talent!`,
        picture: "./img/CharlesAznavour.webp",
        song: "./audio/Charles_Aznavour_-_Je_mvoyais_deja_52990320.mp3",
        rate: 5
    }, {
        singer: "Daft Punk (feat. Pharrell Williams & Nile Rodgers)",
        name: "Get lucky",
        picture: "./img/getlucky.webp",
        lyrics: `[Verse 1: Pharrell Williams]Like the legend of the phoenix, huhAll ends with beginningsWhat keeps the planet spinning, uh-huhThe force from the beginningLook[Pre-Chorus: Pharrell Williams]We've come too farTo give up who we areSo let's raise the barAnd our cups to the stars[Chorus: Pharrell Williams]She's up all night 'til the sunI'm up all night to get someShe's up all night for good funI'm up all night to get luckyWe're up all night 'til the sunWe're up all night to get someWe're up all night for good funWe're up all night to get lucky[Post-Chorus: Pharrell Williams]Wе're up all night to get luckyWe'rе up all night to get luckyWe're up all night to get luckyWe're up all night to get lucky [Verse 2: Pharrell Williams]The present has no ribbonYour gift keeps on givingWhat is this I'm feeling?If you wanna leave, I'm with it, uh-huh[Pre-Chorus: Pharrell Williams]We've come too farTo give up who we areSo let's raise the barAnd our cups to the stars[Chorus: Pharrell Williams]She's up all night 'til the sunI'm up all night to get someShe's up all night for good funI'm up all night to get luckyWe're up all night 'til the sunWe're up all night to get someWe're up all night for good funWe're up all night to get lucky[Post-Chorus: Pharrell Williams]We're up all night to get luckyWe're up all night to get luckyWe're up all night to get luckyWe're up all night to get lucky[Verse 2: Pharrell Williams]The present has no ribbonYour gift keeps on givingWhat is this I'm feeling?If you wanna leave, I'm with it, uh-huh[Pre-Chorus: Pharrell Williams]We've come too farTo give up who we areSo let's raise the barAnd our cups to the stars[Chorus: Pharrell Williams]She's up all night 'til the sunI'm up all night to get someShe's up all night for good funI'm up all night to get luckyWe're up all night 'til the sunWe're up all night to get someWe're up all night for good funWe're up all night to get lucky[Post-Chorus: Pharrell Williams]We're up all night to get luckyWe're up all night to get luckyWe're up all night to get luckyWe're up all night to get lucky`,
        song: "./audio/Daft Punk — Get Lucky (feat. Pharrell Williams & Nile Rodgers).mp3",
        rate: 3.5
    }, {
        singer: "50 Cent and Justin Timberlake",
        name: "Ayo Technology",
        catalogeName: "Instrumental",
        picture: "https://i.guim.co.uk/img/media/01a211950c05bec2afe89d2559fc8980ec335a93/16_0_1978_1187/master/1978.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=7e468cfb94705090ae55308573b17227",
        lyrics: `[Intro: 50 Cent]Somethin' specialUnforgettable50 Cent (Cent)Justin ('tin)Timbaland ('land)Goddamn, damn[Bridge: 50 Cent]She, she, she want it, I wanna give it to herShe know that it's right here for herI wanna see her break it down (Yeah)I'm ballin', throwing money 'round[Verse 1: 50 Cent]She a working girl, she work the poleShe break it down, she take it lowShe fine as hell, she 'bout the doughShe doing her thing out on the floorHer money-money, she make it, make itLook at the way she shake it, shake itMake you wanna touch it, make you wanna taste itHave you lusting for it, going crazy, face itNow don't stop, get it, get itThe way she shake it make you wanna hit itThink she double-jointed from the way she split itGot your head fucked up from the way she did itShe so much more than you used toShe know just how to move to seduce youShe gon' do the right thing and touch the right spotsAnd dance in your lap 'til you ready to pop[Bridge: 50 Cent & Justin Timberlake; Justin Timberlake]She always ready, when you want it, she want itLike a nympho, the info, I'll show you where to meet herOn the late night, 'til daylight, the club jumpingIf you want a good time, she gon' give you what you wantLet me talk to you[Pre-Chorus: Justin Timberlake]Baby, you're so new-age, you're like my new crazeLet's get together, maybe we can start a new phaseThis smoke's got the club all hazySpotlights don't do you justice, babyWhy don't you come over here?[Chorus: Justin Timberlake]You got me saying, "Ayo!" I'm tired of using technologyWhy don't you sit down on top of me?Ayo! I'm tired of using technologyI need you right in front of meOoh, she wants it, ugh, ugh, she wants itOoh, she wants it (So) I gotta give it to herOoh, she wants it, ugh, ugh, she wants itOoh, she wants it (So) I gotta give it to her[Post-Chorus: Timbaland]Your hips, your thighs, they got me hypnotizedLet me tell youYour hips, your thighs, they got me hypnotizedLet me tell youYour hips, your thighs, they got me hypnotizedLet me tell youYour hips, your thighs, they got me hypnotizedLet me tell you, girl[Verse 2: 50 Cent]Got a thing for that thing she gotThe way she make it tick, the way she make it popI make it rain for her so she don't stopI ain't got to move, I can sit and watchIn the fantasy, it's plain to seeJust how it be, her and meBackstroking, sweat soaking all into my satin sheetsWhen she ready to ride, I'm ready to rollI'll be in this bitch 'til the club closeWatching her do her thing on all foursNow that—that there should be 'gainst the law[Bridge: 50 Cent, 50 Cent & Justin Timberlake; Justin Timberlake]From side to side, left to right, break it down, down, downKnow I like when you're hype and you throw it all aroundDifferent style, different mood, damn, I like the way you moveGirl, you got me thinking 'bout all the things I'll do to youLet's get it poppin', shawty, we could switch positionsFrom the couch to the counters in my kitchenLet me talk to you[Pre-Chorus: Justin Timberlake]Baby, you're so new-age, you're like my new crazeLet's get together, maybe we can start a new phaseThis smoke's got the club all hazySpotlights don't do you justice, babyWhy don't you come over here?[Chorus: Justin Timberlake]You got me saying, "Ayo!" I'm tired of using technologyWhy don't you sit down on top of me?Ayo! I'm tired of using technologyI need you right in front of meOoh, she wants it, ugh, ugh, she wants itOoh, she wants it (So) I gotta give it to herOoh, she wants it, ugh, ugh, she wants itOoh, she wants it (So) I gotta give it to her[Post-Chorus: Timbaland]Your hips, your thighs, they got me hypnotizedLet me tell youYour hips, your thighs, they got me hypnotizedLet me tell youYour hips, your thighs, they got me hypnotizedLet me tell youYour hips, your thighs, they got me hypnotizedLet me tell you, girl`,
        song: "./audio/50 Cent - She Wants It (feat. Justin Timberlake).mp3",
        rate: 4.9
    }, {
        singer: "Feat. Eminem, Dr. Dre, Snoop Dogg, Xzibit & Nate Dogg)",
        name: "Bitch Please II",
        picture: "./img/bE1e2Damd_Y.webp",
        lyrics: `[Intro: Snoop Dogg & Dr. Dre]Yeah, vad händer, Detroit?Ne-äh, nä-äh nä, nej, det gjorde han inteDe gjorde inte det igen (Vad-vad, ni vad?)Ni sket på dessa niggas två gånger, Dr. Dre?Oh, jaUh-uh, nä, känner du det där?Det här är något speciellt (Vad-vad, vad-vad-vad?)Yeah, det är en skål till boogie, baby, uhTill boogie-oogie-oggieYeah, ni vet, vad som händer, Dre?[Vers 1: Dr. Dre]Lägg mig tillbaka och spela något gammalt enkel gangster skitNågot av Slims skit, och starta uppror som Limp BizkitBästa kast på "Guilty Conscience" på konserterOch se mosh pits tills mothеrfuckers slår ner varandra medvеtslösa (Akta dig, nigga)Vissa av dessa folkmassor jag och Snoop lockadeÄr niggas från Crenshaw, från Long Beach till South CentralWhao, inte dessa niggas igenDessa vuxna okunniga män med pistolerna igen (Fan)Ni och vilken armé kan skada mig?D.R.E och Shady med Doggy från Long Beach (Västerort)Kom en lång väg för att få mina sånger att speladeDet kommer vara ett fel drag att stirra på mig på fel sättJag har en lång Uzi och jag bär den varje dagIbland är det en mardröm att bara vara AndreMen jag...[Vers 2: Snoop Dogg]På något sätt, på något sättHej, nigga, du känner mig som Dogg-ay (Snoop Dogg)Och låt mig ta bort er niggas och visa er vart fan jag kommer frånJag får festen att börja från skiten som jag spottar (Yeah)Smitolycka, får det gjort, få medlen, dela och spring (Akta dig)Hur typ femtio pistoler och jag älskarAlla lika mycket, bang-bang (Fakta)Fan, baby, vad är ditt namn? (Vad är ditt namn?)Jag glömde, vad sa du att det var? Fan, en nigga full (Full)Hänger i klubben med min brorson Eminem (Vad händer, Slim?) Vad händer, bror? (Vad händer, Snoop?)Det stora vita amerikanska hoppet (Uh-huh)Klar med att hänga med kungen över motherfucking västkusten, baby[Refräng: Nate Dogg & Snoop Dogg]Och du vill inte bråka med migEnda niggan som jag litar på är migJävla runt och får mig spruta hättaDet är djävulen, de vill alltid dansa[Vers 3: Xzibit]Jag är huvud niggan ansvarig, jag ser dina tagDu är hittad död i ditt garage med en klockan tio med nyhetsbevakningMåste älska det för jag exponerar fasadenDina små lungor är för små för att röka med GudSkämt åt sidan, kom häng med ossStår över dig men en 12 kaliber på väg att skjutaDet är som aska till aska och damm till dammJag kanske lämnar i en kroppsväska, men aldrig i handklovarSå vem litar du på? De är bara inte tillräckligt robustaNär saker blir tuffa, jag är i klubben skjuter med PuffBitch, snälla! Du måste ha en psykisk sjukdomInta positionen och gå tillbaka ner på dina knänKom igen[Refräng: Nate Dogg & Snoop Dogg]Och du vill inte bråka med migEnda niggan som jag litar på är migJävla runt och får mig spruta hättaDet är djävulen, de vill alltid dansaOch du vill inte bråka med migEnda niggan som jag litar på är migJävla runt och får mig spruta hättaDet är djävulen, de vill alltid dansa[Vers 4: Eminem & Snoop Dogg]Aw, nej, stora Slim Dogg40 kilo bollar (Va?), kuk 15 centimeter lång (Mm)Gå tillbaka till avsugningen, babyHan är Shady (Han är så galen!) (Ha-ha-ha)Ge mig mikrofonen, låt mig recitera till Timothy WhitePiketer utanför Interscopes kontor varje kvällVad om han har rätt? Jag är bara en kriminell som tjänar på världens eländeVad i hela världen ger mig rättenAtt säga vad jag vill och gå runt visa fingret?Lever stadslivet som en vit unge från huvudstadenDrömmer på natten att jag skriker på mamma, planerar att draRymma hemifrån och växa upp till att bli elak som migJag vill bara att ni alla ser mig, och att människor ska seAtt, någonstans djupt ner, finns det en anständig människa i migDen kan bara inte bli hittad, så anledningen du har sett den här migÄr för att det här är jag nu, den senaste snubben som är så elakSå när du ser mig klå upp sig som en nörd på TVEller hörde CD använda bög ordet så oftaÄr det bara jag som är jag; här, vill ni att jag ska sänka mig?Sug min fucking kuk, din bög, Är du glad nu?Kolla här:Jag startar problem vart jag än går (Jag än går)Fråga vakten i klubben för de vet (För de vet)Jag startar skit, de kastar ut mig genom bakdörren (Bakdörren)Kommer tillbaka och skjuter klubben med en .44 (En .44)[Refräng: Nate Dogg & Snoop Dogg]Och du vill inte bråka med migEnda niggan som jag litar på är migJävla runt och får mig spruta hättaDet är djävulen, de vill alltid dansaOch du vill inte bråka med migEnda niggan som jag litar på är migJävla runt och får mig spruta hättaDet är djävulen, de vill alltid dansa[Outro: Xzibit]2001 och för evigtSlim Shady, Dr. DreSNoop Dogg, X till ZNate Dogg, kom igen, yeah`,
        song: "./audio/Eminem — Bitch Please II (Feat. Dr. Dre, Snoop Dogg, Xzibit & Nate Dogg).mp3",
        rate: 4.5
    }, {
        singer: "Eminem",
        name: "The Real Slim Shady",
        catalogeName: "Rap",
        picture: "./img/therealslimshady.webp",
        lyrics: `[Intro]May I have your attention, please?May I have your attention, please?Will the real Slim Shady please stand up?I repeatWill the real Slim Shady please stand up?We're gonna have a problem here[Verse 1]Y'all act like you never seen a white person beforeJaws all on the floor like Pam, like Tommy just burst in the doorAnd started whoopin' her ass worse than beforeThey first were divorced, throwin' her over furniture (Agh!)It's the return of the "Oh, wait, no way, you're kiddingHe didn't just say what I think he did, did he?"And Dr. Dre saidNothing, you idiots, Dr. Dre's dead, he's locked in my basement (Ha-ha!)Feminist women love Eminem"Chicka-chicka-chicka, Slim Shady, I'm sick of himLook at him, walkin' around, grabbin' his you-know-whatFlippin' the you-know-who", "Yeah, but he's so cute though"Yeah, I probably got a couple of screws up in my head looseBut no worse than what's goin' on in your parents' bedroomsSometimes I wanna get on TV and just let looseBut can't, but it's cool for Tom Green to hump a dead moose"My bum is on your lips, my bum is on your lips"And if I'm lucky, you might just give it a little kissAnd that's the message that we deliver to little kidsAnd expect them not to know what a woman's clitoris isOf course, they're gonna know what intercourse isBy the time they hit fourth grade they've got the Discovery Channel, don't they?We ain't nothin' but mammalsWell, some of us cannibals who cut other people open like cantaloupesBut if we can hump dead animals and antelopesThen there's no reason that a man and another man can't elopeBut if you feel like I feel, I got the antidoteWomen, wave your pantyhose, sing the chorus, and it goes[Chorus]I'm Slim Shady, yes, I'm the real ShadyAll you other Slim Shadys are just imitatingSo won't the real Slim Shady please stand upPlease stand up, please stand up?'Cause I'm Slim Shady, yes, I'm the real ShadyAll you other Slim Shadys are just imitatingSo won't the real Slim Shady please stand upPlease stand up, please stand up?[Verse 2]Will Smith don't gotta cuss in his raps to sell records (Nope)Well, I do, so fuck him, and fuck you tooYou think I give a damn about a Grammy?Half of you critics can't even stomach me, let alone stand me"But Slim, what if you win? Wouldn't it be weird?"Why? So you guys could just lie to get me here?So you can sit me here next to Britney Spears?Yo, shit, Christina Aguilera better switch me chairsSo I can sit next to Carson Daly and Fred DurstAnd hear 'em argue over who she gave head to firstLittle bitch put me on blast on MTV"Yeah, he's cute, but I think he's married to Kim, hee-hee"I should download her audio on MP3And show the whole world how you gave Eminem VD (Agh!)I'm sick of you little girl and boy groups, all you do is annoy meSo I have been sent here to destroy youAnd there's a million of us just like meWho cuss like me, who just don't give a fuck like meWho dress like me, walk, talk and act like meAnd just might be the next best thing, but not quite me[Chorus]'Cause I'm Slim Shady, yes, I'm the real ShadyAll you other Slim Shadys are just imitatingSo won't the real Slim Shady please stand upPlease stand up, please stand up?'Cause I'm Slim Shady, yes, I'm the real ShadyAll you other Slim Shadys are just imitatingSo won't the real Slim Shady please stand upPlease stand up, please stand up?[Verse 3]I'm like a head trip to listen to 'cause I'm only givin' youThings you joke about with your friends inside your livin' roomThe only difference is I got the balls to say it in front of y'allAnd I don't gotta be false or sugarcoat it at allI just get on the mic and spit itAnd whether you like to admit it (Err), I just shit itBetter than ninety percent of you rappers out canThen you wonder: "How can kids eat up these albums like Valiums?"It's funny, 'cause at the rate I'm goin', when I'm thirtyI'll be the only person in the nursin' home flirtingPinchin' nurse's asses when I'm jacking off with JergensAnd I'm jerking, but this whole bag of Viagra isn't workingAnd every single person is a Slim Shady lurkin'He could be working at Burger King, spittin' on your onion rings (Ch, puh)Or in the parkin' lot, circling, screaming, "I don't give a fuck!"With his windows down and his system upSo will the real Shady please stand upAnd put one of those fingers on each hand up?And be proud to be outta your mind and outta controlAnd one more time, loud as you can, how does it go?[Chorus]I'm Slim Shady, yes, I'm the real ShadyAll you other Slim Shadys are just imitatingSo won't the real Slim Shady please stand upPlease stand up, please stand up?'Cause I'm Slim Shady, yes, I'm the real ShadyAll you other Slim Shadys are just imitatingSo won't the real Slim Shady please stand upPlease stand up, please stand up?'Cause I'm Slim Shady, yes, I'm the real ShadyAll you other Slim Shadys are just imitatingSo won't the real Slim Shady please stand upPlease stand up, please stand up?'Cause I'm Slim Shady, yes, I'm the real ShadyAll you other Slim Shadys are just imitatingSo won't the real Slim Shady please stand upPlease stand up, please stand up?[Outro]Ha-haI guess there's a Slim Shady in all of usFuck it, let's all stand up`,
        song: "./audio/Eminem - The Real Slim Shady.mp3",
        rate: 3.7
    }, {
        singer: "Gnarls Barkley",
        name: "Crazy",
        picture: "./img/crazy.webp",
        lyrics: `[Verse 1]I remember whenI remember, I remember when I lost my mindThere was something so pleasant about that placeEven your emotions have an echo, in so much space, mmmAnd when you're out there without careYeah, I was out of touchBut it wasn't because I didn't know enoughI just knew too much, mm[Chorus 1]Does that make me crazy?Does that make me crazy?Does that make me crazy?Possibly[Verse 2]And I hope that you are having the time of your lifeBut think twice, that's my only advice, mmCome on now, who do youWho do you, who do you, who do you think you are?Ha, ha, ha, bless your soulYou really think you're in control?[Chorus 2]Well, I think you're crazyI think you're crazyI think you're crazyJust like me[Verse 3]My heroes had the heart to lose their lives out on the limbAnd all I remember is thinkin' I wanna be like them, mm-hmmEver since I was littleEver since I was little, it looked like funAnd it's no coincidence I've comeAnd I can die when I'm done[Chorus 3]But maybe I'm crazyMaybe you're crazyMaybe we're crazyProbably[Outro]Mm-woah, oohOoh, woo-oohOoh, oohOoh-hoo, mm-hmm`,
        song: "./audio/gnarls-barkley-crazy.mp3",
        rate: 4.1
    }, {
        singer: "Grand Curt - (Cover Of Snoop Dogg, Wiz Khalifa & Bruno Mars)",
        name: "Young, Wild & Free",
        picture: "./img/YoungWild&Free.webp",
        lyrics: `[Intro: Snoop Dogg]Is this thing on? Word[Chorus: Bruno Mars & Wiz Khalifa]So what we get drunk?So what we smoke weed?We're just having funWe don't care who sees (Shit)So what we go out? (Ayy, lemme get a lighter, please?)That's how it's supposed to be ('Cause you know I'm high as fuck and I forgot one)Living young and wild and free (Keep that in there)[Verse 1: Lil Wayne]Yeah! Bitch, I'm paid, that's all I gotta sayCan't see you little niggas—the money in the way, and I'mI'm sitting high, a gangsta ride bladesAnd if you ain't gonna ride fly, then you might as well hate, shitI gotta eat, yeah, even though I ateNo, it ain't my birthday, but I got my name on that cake, shitBelieve that, and if your mans wan' playThеn I'ma fuck around and put that boy's brains on the gateAyy, pick em up! Fuck еm, let em layWhere I'm from, we see a fuckin' dead body every dayThat's—Uptown! Throw a stack at emMake a song about me, I'm throwing shots back at 'em (Bop-bop)Your bitch on my pipe, she like a crack addictAnd, she saw me cooking eggs, she thought I was back at it, yeahI grab the keys, "Ho I gotta go"Got my motorcycle jacket and my motorcycle locs[Chorus: Bruno Mars]So what we get drunk?So what we smoke weed?We're just having funWe don't care who seesSo what we go out?That's how it's supposed to beLiving young and wild and free[Verse 2: Eminem]There used to be a time when you could just say a rhyme andWouldn't have to worry about one of your people dyin'But now it's elevated, 'cause once you put someone's kids in itThe shit gets escalated—it ain't just words no more, is it?It's a different ballgame, you call names and you ain't just rappin'We actually tried to stop the 50 and Ja beef from happenin'Me and Dre had sat with him, kicked it and had a chat with himAnd asked him not to start it, he wasn't gonna go after himUntil Ja started yappin' in magazines how he stabbed himFuck it, 50, smash him! Mash on him, let him have itMeanwhile my attention's pulled in another directionSome receptionist at The Source who answers phones at his deskHas an erection for me and thinks that I'll be his resurrectionTries to blow the dust off his mic and make a new recordBut now he's fucked the game up 'cause one of the ways I came upWas through that publication, the same one that made me famousNow the owner of it has got a grudge against me for nothin'?Well, fuck it, that motherfucker could get it too, fuck him then!But I'm so busy bein' pissed off, I don't stop to thinkThat we've just inherited 50's beef with Murder Inc[Chorus: Bruno Mars]So what we get drunk?So what we smoke weed?We're just having funWe don't care who seesSo what we go out?That's how it's supposed to beLiving young and wild and free[Verse 3: Snoop Dogg]Can't forget it, they made me who I am, a kingAnd I'm still on the scene, you gotta love itAll out in public, the people want to touch itI need a blunt with the stuffin'Nigga, it's nothin' for me to chill out, post up at the houseWith Madden on the screen, and smash on the homiesHollywood nice now, everybody on meAnd on the blogs talk shit like they know me, hm[Chorus: Bruno Mars, Snoop Dogg & Wiz Khalifa]So what we get drunk? (Ha ha)So what we smoke weed? (Yeah)We're just having funWe don't care who sees (We don't care who sees)So what we go out?That's how it's supposed to be (Yup)Living young and wild and free[Chorus: Bruno Mars & Snoop Dogg]So what we get drunk?So what we smoke weed?We're just having funWe don't care who sees (We don't care who sees)So what we go out?That's how it's supposed to beLiving young and wild and free[Outro: Snoop Dogg]High school, manHey Wiz, I'm gon' give weed to you in 3rd period tomorrowI'll holla at you`,
        song: "./audio/Grand Curt - Young, Wild & Free (Cover Of Snoop Dogg, Wiz Khalifa & Bruno Mars).mp3",
        rate: 3.3
    }, {
        singer: "Hozier",
        name: "Take Me To Church",
        picture: "./img/TakeMeToChurch.webp",
        lyrics: `[Verse 1]My lover's got humourShe's the giggle at a funeralKnows everybody's disapprovalI should've worshipped her soonerIf the heavens ever did speakShe's the last true mouthpieceEvery Sunday's gettin' more bleakA fresh poison each weekWe were born sick, you heard them say itMy church offers no absolutesShe tells me, "Worship in the bedroom"The only heaven I'll be sent toIs when I'm alone with youI was born sick, but I love itCommand me to be well[Pre-Chorus]A, amenAmen, amen[Chorus]Take me to churchI'll worship like a dog at the shrine of your liesI'll tell you my sins and you can sharpen your knifeOffer me that deathless deathOh, good God, let me give you my lifeTake me to churchI'll worship like a dog at the shrine of your liesI'll tell you my sins and you can sharpen your knifeOffer me that deathless deathOh, good God, let me give you my life[Verse 2]If I'm a pagan of the good timesMy lover's the sunlightTo keep the goddess on my sideShe demands a sacrificeDrain the whole sea, get somethin' shinySomethin' meaty for the main courseThat's a fine lookin' high horseWhat you got in the stable?We've a lot of starvin' faithfulThat looks tasty, that looks plentyThis is hungry work[Chorus]Take me to churchI'll worship like a dog at the shrine of your liesI'll tell you my sins, so you can sharpen your knifeOffer me my deathless deathOh, good God, let me give you my lifeTake me to churchI'll worship like a dog at the shrine of your liesI'll tell you my sins, so you can sharpen your knifeOffer me my deathless deathOh, good God, let me give you my life[Bridge]No masters or kings when the ritual beginsThere is no sweeter innocence than our gentle sinIn the madness and soil of that sad earthly sceneOnly then, I am human, only then, I am clean[Pre-Chorus]Oh, oh, amenAmen, amen[Chorus]Take me to churchI'll worship like a dog at the shrine of your liesI'll tell you my sins and you can sharpen your knifeOffer me that deathless deathOh, good God, let me give you my lifeTake me to churchI'll worship like a dog at the shrine of your liesI'll tell you my sins and you can sharpen your knifeOffer me that deathless deathOh, good God, let me give you my life[Produced by Hozier and Rob Kirwan]`,
        song: "./audio/Hozier - Take Me To Church.mp3",
        rate: 4.2
    }, {
        singer: "Jaymes Young",
        name: "Infinity",
        picture: "./img/infinity.webp",
        lyrics: `[Intro](Oh-oh, oh-oh-oh)(Oh-oh, oh-oh-oh)[Verse 1]Baby, this love, I'll never let it dieCan't be touched by no oneI'd like to see them try (Oh-oh)I'm a mad man for your touch (Oh-oh)Girl, I've lost control (Oh-oh-oh)I'm gonna make this last forever (Oh-oh)Don't tell me it's impossible (Oh-oh-oh)[Chorus]'Cause I love you for infinity (Oh-oh-oh)I love you for infinity (Oh-oh-oh)'Cause I love you for infinity (Oh-oh-oh)I love you for infinity (Oh-oh-oh)[Verse 2]Oh, darling, my soulYou know it aches for yoursAnd you've been filling this holeSince you were born, oh'Cause you're the reason I believe in fate (Oh-oh)You're my paradise (Oh-oh-oh)And I'll do anything to be your love (Oh-oh)I'll be your sacrifice (Oh-oh-oh)[Chorus]'Cause I love you for infinity (Oh-oh-oh)I love you for infinity (Oh-oh-oh)'Cause I love you for infinity (Oh-oh-oh)I love you for infinity (Oh-oh-oh)(Oh-oh)[Bridge]Meet me at the bottom of the ocean (Ocean)Where the time is frozen (Frozen)Where all the universes open (Open)Love isn't random, we are chosen (Oh-oh)And we could wear the same crownKeep slowing your heart downWe are the gods now[Chorus]'Cause I love you for infinity (Oh-oh-oh)I love you for infinity (Oh-oh-oh)'Cause I love you for infinity (Oh-oh-oh)I love you for infinity (Oh-oh-oh)[Outro](Oh-oh, oh-oh-oh)(Oh-oh, oh-oh-oh)(Oh-oh, oh-oh)(Oh-oh, oh-oh)`,
        song: "./audio/Jaymes-Young-Infinity.mp3",
        rate: 4.4
    } ];
    let j;
    for (j = 0; j < AllSongs.length; j++) {
        songItem = `<li class="songs__items"><span class="songs__number">${j + 1}</span><div class="songs__img" style="background: url(${AllSongs[j].picture});"></div><div class="songs__text"><div class="songs__name">${AllSongs[j].name}</div><span class="songs__singer">${AllSongs[j].singer}</span></div></li>`;
        songList.innerHTML += songItem;
        itemSong = document.querySelectorAll(".songs__items");
    }
    itemSong[0].classList.add("active");
    let songsDisplay = [];
    let sngActive = false;
    songInfoSetUps(AllSongs, 0);
    itemSong.forEach(((song, y) => {
        song.onclick = () => {
            musicNumber = y;
            itemSong.forEach((itm => itm.classList.remove("active")));
            itemSong[musicNumber].classList.add("active");
            songInfoSetUps(AllSongs, y);
            playMusic();
        };
    }));
    function songInfoSetUps(songList, index) {
        singerName.innerText = songList[index].singer;
        songsHeading__singer.innerText = songList[index].singer;
        songName.innerText = songList[index].name;
        songsHeading__songName.innerText = songList[index].name;
        backgroundImg.style.background = `url(${songList[index].picture})`;
        frontImg.style.background = `url(${songList[index].picture})`;
        audio.src = songList[index].song;
        ratingVlueHtml.innerText = songList[index].rate;
        lyricsText.innerText = songList[index].lyrics;
        initRatings(songList[index].rate);
        numerication();
    }
    let lyricsActive = false;
    playerDisplay.onclick = () => {
        if (!lyricsActive) {
            lyrics.style = "opacity: 1;visibility: visible;";
            lyricsActive = true;
        } else {
            lyrics.style = "";
            lyricsActive = false;
        }
    };
    function numerication() {
        songNumeration.innerText = !sngActive ? musicNumber + 1 + "/" + AllSongs.length : musicNumber + 1 + "/" + songsDisplay.length;
    }
    const volumeRange = document.querySelector(".footer-player-volume__input");
    function playMusic() {
        playPause = true;
        audio.play();
        playButton.children[0].className = "fa fa-pause";
    }
    function pauseMusic() {
        playPause = false;
        audio.pause();
        playButton.children[0].className = "fa fa-play";
    }
    playButton.onclick = () => {
        !playPause ? playMusic() : pauseMusic();
    };
    let shuffleActive = false;
    shuffleButton.onclick = () => {
        if (!shuffleActive) {
            shuffleButton.style = "color: #ffba4f;font-size: 25px;";
            shuffleActive = true;
        } else {
            shuffleButton.style = "";
            shuffleActive = false;
        }
    };
    let shuffleB = 0;
    function shuffle() {
        if (shuffleActive) {
            a = Math.round(Math.random() * (AllSongs.length - 1));
            a === shuffleB ? a = 12 : false;
            shuffleB = a;
            musicNumber = a;
        }
    }
    let a;
    previousButton.onclick = () => {
        speedDefault();
        musicNumber--;
        checked = false;
        breakpoints.style = "";
        breakpointA.style = "";
        breakpointDash.style = "";
        breakpointB.style = "";
        breakPointChechker = 0;
        if (musicNumber < 0) musicNumber = AllSongs.length - 1;
        shuffle();
        itemSong.forEach((itm => itm.classList.remove("active")));
        itemSong[musicNumber].classList.add("active");
        songInfoSetUps(AllSongs, musicNumber);
        playMusic();
    };
    nextButton.onclick = () => {
        speedDefault();
        musicNumber++;
        checked = false;
        breakpoints.style = "";
        breakpointA.style = "";
        breakpointDash.style = "";
        breakpointB.style = "";
        breakPointChechker = 0;
        if (musicNumber > AllSongs.length - 1) musicNumber = 0;
        shuffle();
        itemSong.forEach((itm => itm.classList.remove("active")));
        itemSong[musicNumber].classList.add("active");
        songInfoSetUps(AllSongs, musicNumber);
        playMusic();
    };
    let volumeMuteActive = false;
    let memoryVolume = 1;
    let memoryRange = 100;
    volumeRange.value = 100;
    volumeRange.oninput = () => {
        audio.volume = volumeRange.value / 100;
        memoryVolume = volumeRange.value / 100;
        memoryRange = audio.volume * 100;
        if (audio.volume == 0) volumeMute.children[0].className = "fa fa-volume-off"; else volumeMute.children[0].className = "fa fa-volume-up";
    };
    volumeMute.onclick = () => {
        console.log(memoryVolume);
        if (!volumeMuteActive) {
            audio.volume = 0;
            volumeRange.value = 0;
            volumeMute.children[0].className = "fa fa-volume-off";
            volumeMuteActive = true;
        } else {
            console.log(memoryRange);
            audio.volume = memoryVolume;
            volumeRange.value = audio.volume * 100;
            volumeMute.children[0].className = "fa fa-volume-up";
            volumeMuteActive = false;
        }
    };
    songBar.oninput = () => {
        audio.currentTime = audio.duration * songBar.value / 100;
    };
    forward10.onclick = () => audio.currentTime += 10;
    backward10.onclick = () => audio.currentTime -= 10;
    let speed = 0;
    let fastButtonActive = false;
    let slowButtonActive = false;
    function speedDefault() {
        fastButtonActive = false;
        slowButtonActive = false;
        fastButton.style = "";
        slowButton.style = "";
        speed = 1;
        audio.playbackRate = speed;
    }
    slowButton.onclick = () => {
        fastButtonActive = false;
        fastButton.style = "";
        if (!slowButtonActive) {
            speed = .5;
            slowButton.style = "background-color: #191515;color: #ffba4f;font-size: 25px;";
            audio.playbackRate = speed;
            slowButtonActive = true;
        } else {
            speed = 1;
            slowButton.style = "";
            audio.playbackRate = speed;
            slowButtonActive = false;
        }
    };
    fastButton.onclick = () => {
        slowButton.style = "";
        slowButtonActive = false;
        if (!fastButtonActive) {
            fastButton.style = "background-color: #191515;color: #ffba4f;font-size: 25px;";
            speed = 1.5;
            audio.playbackRate = speed;
            fastButtonActive = true;
        } else {
            fastButton.style = "";
            speed = 1;
            audio.playbackRate = speed;
            fastButtonActive = false;
        }
    };
    breakpoints.onclick = () => {
        if (breakPointChechker == 0) {
            A = audio.currentTime;
            breakpoints.style = "background-color: #191515;";
            breakpointA.style = "color: #ffba4f;font-size: 25px;";
            breakPointChechker = 1;
        } else if (breakPointChechker == 1) {
            B = audio.currentTime;
            audio.currentTime = A;
            checked = true;
            breakpointDash.style = "color: #ffba4f;font-size: 25px;";
            breakpointB.style = "color: #ffba4f;font-size: 25px;";
            breakPointChechker = 2;
        } else if (breakPointChechker == 2) {
            checked = false;
            breakpoints.style = "";
            breakpointA.style = "";
            breakpointDash.style = "";
            breakpointB.style = "";
            breakPointChechker = 0;
        }
    };
    let active = false;
    let repeatButtonActive = false;
    audio.ontimeupdate = () => {
        if (audio.currentTime == 0) audio.currentTime = 0; else {
            songBar.value = audio.currentTime * 100 / audio.duration;
            let currentMinute = Math.floor(audio.currentTime / 60);
            let currentSecond = Math.floor(audio.currentTime - currentMinute * 60);
            let durationMinute = Math.floor(audio.duration / 60);
            let durationSeconds = Math.floor(audio.duration - durationMinute * 60);
            if (audio.currentTime > .001) {
                songDurationTime.innerText = `${durationMinute}:${durationSeconds = durationSeconds < 10 ? "0" + durationSeconds : durationSeconds}`;
                songCurrentTime.innerText = `${currentMinute}:${currentSecond = currentSecond < 10 ? "0" + currentSecond : currentSecond}`;
            }
            if (audio.currentTime > B && checked) audio.currentTime = A;
            repeatButton.onclick = () => {
                if (!repeatButtonActive) {
                    repeatButton.style = "color: #ffba4f;font-size: 25px;";
                    active = true;
                    repeatButtonActive = true;
                } else {
                    repeatButton.style = "";
                    active = false;
                    repeatButtonActive = false;
                }
            };
            if (audio.ended && !active) {
                musicNumber++;
                shuffle();
                itemSong.forEach((itm => itm.classList.remove("active")));
                itemSong[musicNumber].classList.add("active");
                songInfoSetUps(AllSongs, musicNumber);
                playMusic();
            } else if (audio.ended && active) {
                shuffle();
                itemSong.forEach((itm => itm.classList.remove("active")));
                itemSong[musicNumber].classList.add("active");
                songInfoSetUps(AllSongs, musicNumber);
                playMusic();
            }
        }
    };
    function initRatings(rateValue) {
        let ratingActive, ratingValue;
        for (let index = 0; index < ratings.length; index++) {
            const rating = ratings[index];
            initRating(rating);
        }
        function initRating(rating) {
            initRatingVars(rating);
            setRatingActiveWidth(rateValue);
        }
        function initRatingVars(rating) {
            ratingActive = rating.querySelector(".rating__active");
            ratingValue = rating.querySelector(".rating__value");
        }
        function setRatingActiveWidth(index = ratingValue.innerHTML) {
            const ratingActiveWidth = index / .05;
            ratingActive.style.width = `${ratingActiveWidth}%`;
        }
    }
    isWebp();
})();