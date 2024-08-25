import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      <Button onClick={() => props.count.value -= 1}>-1</Button>
      <a href={`/greet/${props.count.value}`}>
        <p class="text-3xl tabular-nums">Greet {props.count}</p>
      </a>
      <Button onClick={() => props.count.value += 1}>+1</Button>
    </div>
  );
}
