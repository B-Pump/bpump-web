import { Skeleton } from "@/components/ui/skeleton";

export function ProgsSkeleton() {
    return (
        <div className="flex flex-col gap-3 rounded-lg border border-border p-6">
            <div className="flex items-center gap-4">
                <Skeleton className="rounded-md" style={{ width: "100px", height: "100px" }} />
                <div>
                    <Skeleton className="mb-1 h-6 w-32" />
                    <Skeleton className="h-4 w-24" />
                </div>
            </div>
            <div className="justify-center">
                <Skeleton className="h-12" />
            </div>
        </div>
    );
}
