"use client";

export default function Program({ params }: { params: { id: string } }) {
    return <p>Programme : {params.id}</p>;
}
