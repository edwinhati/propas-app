import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context";

export default function Protected({ children }: any) {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  return user ? children : null;
}
