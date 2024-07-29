import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

export const useScrollToSection = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const { contextSafe } = useGSAP();
  const router = useRouter();
  const path = usePathname();

  const scrollToSection = contextSafe((targetSection: string) => {
    if (path !== "/") {
      router.push("/");
      setTimeout(() => {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: targetSection, offsetY: 131 },
          ease: "power2",
        });
      }, 600);
    } else {
      gsap.to(window, {
        duration: 1,
        delay: path !== "/" ? 1 : 0,
        scrollTo: { y: targetSection, offsetY: 131 },
        ease: "power2",
      });
    }
  });

  return { scrollToSection };
};
