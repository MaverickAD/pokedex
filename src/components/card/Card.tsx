import { typeProviders } from "../type/Type.tsx";

const Card = (props: {
  name: string;
  types: string[];
  evolves: number | undefined;
}) => {
  return (
    <div
      className={
        "w-72 max-w-fit p-2 border-4 border-yellow-300 rounded-md bg-zinc-100"
      }
    >
      <h1 className={"text-2xl font-bold"}>{props.name}</h1>
      <div>
        <img src="https://placehold.co/300" alt="" />
      </div>
      <p>Types :</p>
      <ul className={"flex flex-wrap"}>
        {typeProviders.map((provider) => {
          if (props.types.some((type) => provider.canHandle(type))) {
            return provider.component();
          }
        })}
      </ul>
      {props.evolves && <p>Evolves at level {props.evolves}</p>}
    </div>
  );
};

export default Card;
