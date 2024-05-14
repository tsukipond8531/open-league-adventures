export interface CharacterState {
    attack: number;
    defense: number;
    maxHP: number;
    currentHP: number;
    speed: number;
    model: string;
}

export interface BattleState {
    fightId: number;
    enemies: CharacterState[];
    pawns: CharacterState[];
    end: {
        experience: number;
        isPlayerVictory: boolean;
        gold: number;
    } | null;
}

export interface BattleAction {
    origin: {
        from: 'Player' | 'Enemy';
        unitId: number;
    };
    target: {
        to: 'Player' | 'Enemy';
        unitId: number;
    };
    result: {
        damage: number;
        unitDies: boolean;
    };
}
