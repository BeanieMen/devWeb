import { MotionDiv } from "@/lib/framer";

export default function PageTransition({children}: any) {
    return (
        <MotionDiv
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 130,
                damping: 15,
                bounce: 1,
                ease: "easeInOut",
                duration: 0.6
            }}>
            {children}
        </MotionDiv>
    )
}