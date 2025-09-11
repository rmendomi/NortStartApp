import { useEffect, useState } from "react";
import { getMyProfile, updateMyProfile } from "../services/profileService";

export function useProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const p = await getMyProfile();
        if (mounted) setProfile(p);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const save = async (patch) => {
    const p = await updateMyProfile(patch);
    setProfile(p);
  };

  return { profile, loading, save, role: profile?.role ?? "user" };
}
