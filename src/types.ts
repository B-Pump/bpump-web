interface ProgItem {
    id: string;
    owner: string;
    icon: string;
    title: string;
    description: string;
    category: string;
    difficulty: number;
    hint: string[];
    exercises: string[];
}

interface CartItem {
    title: string;
    description: string;
    price: number;
    image: string;
}

interface AccordionItem {
    title: string;
    content: string;
}
