
const cryogemItem = Vars.content.getByName(ContentType.item, "diamond-ore-cryogem");
const phaseStringLiquid = Vars.content.getByName(ContentType.liquid, "diamond-ore-phase-string");
const sporeWaterLiquid = Vars.content.getByName(ContentType.liquid, "diamond-ore-corrupt-water");
const cycloneCryoFrag = extend(BasicBulletType, {});
cycloneCryoFrag.damage = 8;
cycloneCryoFrag.width = 3;
cycloneCryoFrag.speed = 3;
cycloneCryoFrag.height = 6;
cycloneCryoFrag.lifetime = 45;
cycloneCryoFrag.drag = 0.015;
cycloneCryoFrag.pierce = true;
cycloneCryoFrag.despawnEffect = Fx.none;
cycloneCryoFrag.hitEffect = Fx.none;
cycloneCryoFrag.frontColor = Color.valueOf("#4496bb");
cycloneCryoFrag.backColor = Color.valueOf("#4499ee");
cycloneCryoFrag.sprite = "diamond-ore-diamondbullet";
cycloneCryoFrag.status = StatusEffects.freezing;
cycloneCryoFrag.statusDuration = 180;
const cycloneCryo = extend(FlakBulletType, {});
cycloneCryo.fragBullet = cycloneCryoFrag;
cycloneCryo.fragBullets = 6;
cycloneCryo.status = StatusEffects.freezing;
cycloneCryo.splashDamage = 15;
cycloneCryo.shrinkX = 0;
cycloneCryo.shrinkY = 0;
cycloneCryo.drag = 0.012;
cycloneCryo.hitEffect = Fx.flakExplosion;
cycloneCryo.frontColor = Color.valueOf("#4496bb");
cycloneCryo.hitColor = Color.valueOf("#cceeff");
cycloneCryo.backColor = Color.valueOf("#4496bb");
cycloneCryo.damage = 15;
cycloneCryo.speed = 6;
cycloneCryo.lifetime = 60;
cycloneCryo.splashDamageRadius = 16;
cycloneCryo.explodeRadius = 8;
cycloneCryo.sprite = "diamond-ore-diamondshell";
const spectreCryo = extend(BasicBulletType, {});
spectreCryo.speed = 4;
spectreCryo.lifetime = 90;
spectreCryo.status = StatusEffects.freezing;
spectreCryo.splashDamage = 70;
spectreCryo.ammoMultiplier = 4;
spectreCryo.damage = 30;
spectreCryo.splashDamageRadius = 16;
spectreCryo.hitEffect = Fx.mineBig;
spectreCryo.despawnEffect = Fx.mineHuge;
spectreCryo.shootEffect = Fx.shootLiquid;
spectreCryo.width = 12;
spectreCryo.height = 24;
spectreCryo.sprite = "diamond-ore-diamondbullet";
spectreCryo.frontColor = Color.valueOf("#cceeff");
spectreCryo.hitColor = Color.valueOf("#cceeff");
spectreCryo.backColor = Color.valueOf("#4499ee");
const swarmerCryo = extend(MissileBulletType, {});
swarmerCryo.speed = 4;
swarmerCryo.status = StatusEffects.freezing;
swarmerCryo.splashDamage = 25;
swarmerCryo.damage = 25;
swarmerCryo.splashDamageRadius = 48;
swarmerCryo.ammoMultiplier = 4;
swarmerCryo.width = 7;
swarmerCryo.height = 9;
swarmerCryo.sprite = "diamond-ore-diamondmissile";
swarmerCryo.frontColor = Color.valueOf("#49acdc");
swarmerCryo.hitColor = Color.valueOf("#cceeff");
swarmerCryo.backColor = Color.valueOf("#9cd1fb");
swarmerCryo.trailColor = Color.valueOf("#9cd1fb");
const waveString = extend(LiquidBulletType, {});
waveString.speed = 2.5;
waveString.status = StatusEffects.corroded;
waveString.lifetime = 110;
waveString.knockback = 2.55;
waveString.homingRange = 75;
waveString.homingPower = 0.2;
waveString.pierceCap = 32;
waveString.pierce = true;
waveString.liquid = phaseStringLiquid;
const waveSpore = extend(LiquidBulletType, {});
waveSpore.speed = 1.15;
waveSpore.status = StatusEffects.sapped;
waveSpore.lifetime = 140;
waveSpore.knockback = 1.7;
waveSpore.homingRange = 16;
waveSpore.homingPower = 0.01;
waveSpore.damage = 2.2;
waveSpore.liquid = sporeWaterLiquid;
const tsunString = extend(LiquidBulletType, {});
tsunString.speed = 4.5;
tsunString.status = StatusEffects.corroded;
tsunString.lifetime = 110;
tsunString.knockback = 2.55;
tsunString.homingRange = 75;
tsunString.homingPower = 0.2;
tsunString.pierceCap = 64;
tsunString.pierce = true;
tsunString.liquid = phaseStringLiquid;
const tsunSpore = extend(LiquidBulletType, {});
tsunSpore.speed = 1.5;
tsunSpore.status = StatusEffects.sapped;
tsunSpore.lifetime = 190;
tsunSpore.knockback = 3;
tsunSpore.homingRange = 28;
tsunSpore.homingPower = 0.02;
tsunSpore.damage = 2.2;
tsunSpore.liquid = sporeWaterLiquid;
Blocks.cyclone.ammoTypes.put(cryogemItem,cycloneCryo);
Blocks.spectre.ammoTypes.put(cryogemItem,spectreCryo);
Blocks.swarmer.ammoTypes.put(cryogemItem,swarmerCryo);
Blocks.wave.ammoTypes.put(phaseStringLiquid,waveString);
Blocks.wave.ammoTypes.put(sporeWaterLiquid,waveSpore);
Blocks.tsunami.ammoTypes.put(phaseStringLiquid,tsunString);
Blocks.tsunami.ammoTypes.put(sporeWaterLiquid,tsunSpore);