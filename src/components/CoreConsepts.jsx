import CoreConsept from "./CoreConsept/CoreConsept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConsepters() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {/* <CoreConsept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConsept {...CORE_CONCEPTS[1]} />
            <CoreConsept {...CORE_CONCEPTS[2]} />
            <CoreConsept {...CORE_CONCEPTS[1]} /> */}
        {CORE_CONCEPTS.map((conseptItem) => (
          <CoreConsept key={conseptItem.title} {...conseptItem} />
        ))}
      </ul>
    </section>
  );
}
