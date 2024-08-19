// Ne modifiez que le typage TypeScript, ne touchez pas au code JavaScript !
function sayHello(target: { firstName: string, money: number }): string {
    return `Hello ${target.firstName}, you have ${target.money} on your bank account.`;
}
const message: string = sayHello({ firstName: 'World', money: 123 });

// Ce code TypeScript n'est pas complet.
// Regardez les dernières lignes de ce script : TypeScript remonte des erreurs.
// Votre but est de modifier le code pour corriger ces erreurs.
// Vous allez devoir modifier les types déjà définis et en créer d'autres.
// ====================

type Character = {
    name: string;
    life: number;
    attack: number;
    defense: number;
};

type Pet = Character;

type MagicalPet = Pet & {
    magic: number;
};

type Equipment = {
    price: number;
} & Partial<Pick<Character, 'attack' | 'defense'>>;

type WithMagic<T> = T & { magic: number };

type Hero = Character & {
    pets?: Pet[];
    equipments?: Equipment[];
};

type Magician = WithMagic<Hero>;

// ====================
// Ne touchez PAS aux lignes ci-dessous, faites en sorte que TypeScript
// soit content en modifiant UNIQUEMENT le code du dessus !

const babyDragon: Pet = {
    name: 'Typeon',
    life: 50,
    attack: 10,
    defense: 20,
};

const babyLicorn: MagicalPet = {
    name: 'Typemoor',
    life: 80,
    attack: 5,
    defense: 30,
    magic: 50,
};

const smallArmor: Equipment = {
    price: 30,
    attack: 2,
    defense: 5,
};

const smallSword: Equipment = {
    price: 20,
    attack: 5,
};

const smallShield: Equipment = {
    price: 15,
    defense: 10,
};

const smallMagicalWand: WithMagic<Equipment> = {
    price: 50,
    attack: 4,
    magic: 10,
};

const myWarriorHero: Hero = {
    name: 'TSolomon',
    life: 200,
    attack: 30,
    defense: 50,
    pets: [babyDragon, babyLicorn],
    equipments: [
        smallArmor,
        smallSword,
        smallShield,
    ],
};

const myMagicienHero: Magician = {
    name: 'TSoren',
    life: 150,
    attack: 20,
    defense: 40,
    equipments: [smallMagicalWand],
    magic: 200,
};
