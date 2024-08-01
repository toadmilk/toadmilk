import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { Icons } from "@/components/icons";

export function OrbitingCirclesTech() {
    return (
        <div className="relative flex w-[250px] h-[250px] flex-col items-center justify-center overflow-hidden">
            {/* Inner Circles */}
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={30}
            >
                <Icons.nextjs />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={30}
            >
                <Icons.tailwindcss />
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                radius={70}
                duration={20}
                reverse
            >
                <Icons.typescript />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                radius={70}
                duration={20}
                delay={20}
                reverse
            >
                <Icons.react />
            </OrbitingCircles>

            {/* Outer Outer Circles */}
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={110}
            >
                <Icons.vue />
            </OrbitingCircles>
        </div>
    );
}