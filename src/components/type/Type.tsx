export const Type = (props: { name: string; color: string }) => {
  const classname =
    "bg-" +
    props.color +
    "-100 border-" +
    props.color +
    "-600 border rounded-md px-2 mx-1 my-0.5";
  return <span className={classname}>{props.name}</span>;
};

export const FireType = () => <Type name="Fire" color="red" />;
export const GrassType = () => <Type name="Grass" color="green" />;
export const WaterType = () => <Type name="Water" color="blue" />;
export const PoisonType = () => <Type name="Poison" color="purple" />;
export const FlyingType = () => <Type name="Flying" color="gray" />;
export const BugType = () => <Type name="Bug" color="yellow" />;
export const NormalType = () => <Type name="Normal" color="gray" />;
export const ElectricType = () => <Type name="Electric" color="yellow" />;
export const GroundType = () => <Type name="Ground" color="orange" />;
export const FairyType = () => <Type name="Fairy" color="pink" />;
export const FightingType = () => <Type name="Fighting" color="red" />;
export const PsychicType = () => <Type name="Psychic" color="pink" />;
export const RockType = () => <Type name="Rock" color="gray" />;
export const SteelType = () => <Type name="Steel" color="gray" />;
export const IceType = () => <Type name="Ice" color="blue" />;
export const GhostType = () => <Type name="Ghost" color="purple" />;
export const DragonType = () => <Type name="Dragon" color="purple" />;

export const typeProviders = [
  {
    canHandle: (type: string) => type === "fire",
    component: () => <FireType />,
  },
  {
    canHandle: (type: string) => type === "water",
    component: () => <WaterType />,
  },
  {
    canHandle: (type: string) => type === "grass",
    component: () => <GrassType />,
  },
  {
    canHandle: (type: string) => type === "poison",
    component: () => <PoisonType />,
  },
  {
    canHandle: (type: string) => type === "flying",
    component: () => <FlyingType />,
  },
  {
    canHandle: (type: string) => type === "bug",
    component: () => <BugType />,
  },
  {
    canHandle: (type: string) => type === "normal",
    component: () => <NormalType />,
  },
  {
    canHandle: (type: string) => type === "electric",
    component: () => <ElectricType />,
  },
  {
    canHandle: (type: string) => type === "ground",
    component: () => <GroundType />,
  },
  {
    canHandle: (type: string) => type === "fairy",
    component: () => <FairyType />,
  },
  {
    canHandle: (type: string) => type === "fighting",
    component: () => <FightingType />,
  },
  {
    canHandle: (type: string) => type === "psychic",
    component: () => <PsychicType />,
  },
  {
    canHandle: (type: string) => type === "rock",
    component: () => <RockType />,
  },
  {
    canHandle: (type: string) => type === "steel",
    component: () => <SteelType />,
  },
  {
    canHandle: (type: string) => type === "ice",
    component: () => <IceType />,
  },
  {
    canHandle: (type: string) => type === "ghost",
    component: () => <GhostType />,
  },
  {
    canHandle: (type: string) => type === "dragon",
    component: () => <DragonType />,
  },
];
