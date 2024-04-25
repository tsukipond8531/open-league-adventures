import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message fight.RequestFightNextTickMessage
 */
export interface RequestFightNextTickMessage {
    /**
     * @generated from protobuf field: uint32 fight_id = 1;
     */
    fightId: number;
}
/**
 * @generated from protobuf message fight.ResponseFightNextTick
 */
export interface ResponseFightNextTick {
}
/**
 * @generated from protobuf message fight.ClientFightMessage
 */
export interface ClientFightMessage {
    /**
     * @generated from protobuf oneof: client_message
     */
    clientMessage: {
        oneofKind: "requestStartFight";
        /**
         * @generated from protobuf field: fight.RequestStartFight request_start_fight = 1;
         */
        requestStartFight: RequestStartFight;
    } | {
        oneofKind: "requestNextTick";
        /**
         * @generated from protobuf field: fight.RequestNextTick request_next_tick = 2;
         */
        requestNextTick: RequestNextTick;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message fight.RequestStartFight
 */
export interface RequestStartFight {
    /**
     * @generated from protobuf field: string player_id = 1;
     */
    playerId: string;
}
/**
 * @generated from protobuf message fight.RequestNextTick
 */
export interface RequestNextTick {
}
/**
 * @generated from protobuf message fight.ServerFightMessage
 */
export interface ServerFightMessage {
    /**
     * @generated from protobuf oneof: payload
     */
    payload: {
        oneofKind: "startFight";
        /**
         * @generated from protobuf field: fight.StartFight start_fight = 1;
         */
        startFight: StartFight;
    } | {
        oneofKind: "fightAction";
        /**
         * @generated from protobuf field: fight.FightAction fight_action = 2;
         */
        fightAction: FightAction;
    } | {
        oneofKind: "endFight";
        /**
         * @generated from protobuf field: fight.EndFight end_fight = 3;
         */
        endFight: EndFight;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message fight.UnitReference
 */
export interface UnitReference {
    /**
     * @generated from protobuf field: bool is_player = 1;
     */
    isPlayer: boolean;
    /**
     * @generated from protobuf field: uint32 unit_id = 2;
     */
    unitId: number;
}
/**
 * @generated from protobuf message fight.ActionResultMiss
 */
export interface ActionResultMiss {
}
/**
 * @generated from protobuf message fight.ActionResultDamage
 */
export interface ActionResultDamage {
    /**
     * @generated from protobuf field: uint32 value = 1;
     */
    value: number;
    /**
     * @generated from protobuf field: bool unit_dies = 2;
     */
    unitDies: boolean;
}
/**
 * @generated from protobuf message fight.ActionResultHeal
 */
export interface ActionResultHeal {
    /**
     * @generated from protobuf field: uint32 value = 1;
     */
    value: number;
}
/**
 * @generated from protobuf message fight.ActionResult
 */
export interface ActionResult {
    /**
     * @generated from protobuf field: fight.UnitReference target = 1;
     */
    target?: UnitReference;
    /**
     * @generated from protobuf oneof: action_result_payload
     */
    actionResultPayload: {
        oneofKind: "actionResultMiss";
        /**
         * @generated from protobuf field: fight.ActionResultMiss action_result_miss = 2;
         */
        actionResultMiss: ActionResultMiss;
    } | {
        oneofKind: "actionResultDamage";
        /**
         * @generated from protobuf field: fight.ActionResultDamage action_result_damage = 3;
         */
        actionResultDamage: ActionResultDamage;
    } | {
        oneofKind: "actionResultHeal";
        /**
         * @generated from protobuf field: fight.ActionResultHeal action_result_heal = 4;
         */
        actionResultHeal: ActionResultHeal;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message fight.FightActionAttack
 */
export interface FightActionAttack {
}
/**
 * @generated from protobuf message fight.FightSkillAction
 */
export interface FightSkillAction {
    /**
     * @generated from protobuf field: uint32 skill_id = 1;
     */
    skillId: number;
}
/**
 * @generated from protobuf message fight.FightSpellAction
 */
export interface FightSpellAction {
    /**
     * @generated from protobuf field: uint32 spell_id = 1;
     */
    spellId: number;
}
/**
 * @generated from protobuf message fight.FightAction
 */
export interface FightAction {
    /**
     * @generated from protobuf field: fight.UnitReference unit_id = 1;
     */
    unitId?: UnitReference;
    /**
     * @generated from protobuf oneof: action
     */
    action: {
        oneofKind: "fightActionAttack";
        /**
         * @generated from protobuf field: fight.FightActionAttack fight_action_attack = 2;
         */
        fightActionAttack: FightActionAttack;
    } | {
        oneofKind: "fightActionSkill";
        /**
         * @generated from protobuf field: fight.FightSkillAction fight_action_skill = 3;
         */
        fightActionSkill: FightSkillAction;
    } | {
        oneofKind: "fightActionSpell";
        /**
         * @generated from protobuf field: fight.FightSpellAction fight_action_spell = 4;
         */
        fightActionSpell: FightSpellAction;
    } | {
        oneofKind: undefined;
    };
    /**
     * @generated from protobuf field: repeated fight.ActionResult action_result = 5;
     */
    actionResult: ActionResult[];
}
/**
 * @generated from protobuf message fight.EndFight
 */
export interface EndFight {
    /**
     * @generated from protobuf field: bool is_player_victory = 1;
     */
    isPlayerVictory: boolean;
    /**
     * @generated from protobuf field: uint32 experience = 2;
     */
    experience: number;
}
/**
 * @generated from protobuf message fight.RawCharacterData
 */
export interface RawCharacterData {
    /**
     * @generated from protobuf field: uint32 max_hp = 1;
     */
    maxHp: number;
    /**
     * @generated from protobuf field: uint32 attack = 2;
     */
    attack: number;
    /**
     * @generated from protobuf field: uint32 defense = 3;
     */
    defense: number;
    /**
     * @generated from protobuf field: uint32 speed = 4;
     */
    speed: number;
}
/**
 * @generated from protobuf message fight.StartFight
 */
export interface StartFight {
    /**
     * @generated from protobuf field: uint32 fight_id = 1;
     */
    fightId: number;
    /**
     * @generated from protobuf field: repeated fight.RawCharacterData player_characters = 2;
     */
    playerCharacters: RawCharacterData[];
    /**
     * @generated from protobuf field: repeated fight.RawCharacterData enemy_characters = 3;
     */
    enemyCharacters: RawCharacterData[];
}
declare class RequestFightNextTickMessage$Type extends MessageType<RequestFightNextTickMessage> {
    constructor();
    create(value?: PartialMessage<RequestFightNextTickMessage>): RequestFightNextTickMessage;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RequestFightNextTickMessage): RequestFightNextTickMessage;
    internalBinaryWrite(message: RequestFightNextTickMessage, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message fight.RequestFightNextTickMessage
 */
export declare const RequestFightNextTickMessage: RequestFightNextTickMessage$Type;
declare class ResponseFightNextTick$Type extends MessageType<ResponseFightNextTick> {
    constructor();
    create(value?: PartialMessage<ResponseFightNextTick>): ResponseFightNextTick;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ResponseFightNextTick): ResponseFightNextTick;
    internalBinaryWrite(message: ResponseFightNextTick, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message fight.ResponseFightNextTick
 */
export declare const ResponseFightNextTick: ResponseFightNextTick$Type;
declare class ClientFightMessage$Type extends MessageType<ClientFightMessage> {
    constructor();
    create(value?: PartialMessage<ClientFightMessage>): ClientFightMessage;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClientFightMessage): ClientFightMessage;
    internalBinaryWrite(message: ClientFightMessage, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message fight.ClientFightMessage
 */
export declare const ClientFightMessage: ClientFightMessage$Type;
declare class RequestStartFight$Type extends MessageType<RequestStartFight> {
    constructor();
    create(value?: PartialMessage<RequestStartFight>): RequestStartFight;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RequestStartFight): RequestStartFight;
    internalBinaryWrite(message: RequestStartFight, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message fight.RequestStartFight
 */
export declare const RequestStartFight: RequestStartFight$Type;
declare class RequestNextTick$Type extends MessageType<RequestNextTick> {
    constructor();
    create(value?: PartialMessage<RequestNextTick>): RequestNextTick;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RequestNextTick): RequestNextTick;
    internalBinaryWrite(message: RequestNextTick, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message fight.RequestNextTick
 */
export declare const RequestNextTick: RequestNextTick$Type;
declare class ServerFightMessage$Type extends MessageType<ServerFightMessage> {
    constructor();
    create(value?: PartialMessage<ServerFightMessage>): ServerFightMessage;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ServerFightMessage): ServerFightMessage;
    internalBinaryWrite(message: ServerFightMessage, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message fight.ServerFightMessage
 */
export declare const ServerFightMessage: ServerFightMessage$Type;
declare class UnitReference$Type extends MessageType<UnitReference> {
    constructor();
    create(value?: PartialMessage<UnitReference>): UnitReference;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UnitReference): UnitReference;
    internalBinaryWrite(message: UnitReference, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message fight.UnitReference
 */
export declare const UnitReference: UnitReference$Type;
declare class ActionResultMiss$Type extends MessageType<ActionResultMiss> {
    constructor();
    create(value?: PartialMessage<ActionResultMiss>): ActionResultMiss;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ActionResultMiss): ActionResultMiss;
    internalBinaryWrite(message: ActionResultMiss, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message fight.ActionResultMiss
 */
export declare const ActionResultMiss: ActionResultMiss$Type;
declare class ActionResultDamage$Type extends MessageType<ActionResultDamage> {
    constructor();
    create(value?: PartialMessage<ActionResultDamage>): ActionResultDamage;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ActionResultDamage): ActionResultDamage;
    internalBinaryWrite(message: ActionResultDamage, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message fight.ActionResultDamage
 */
export declare const ActionResultDamage: ActionResultDamage$Type;
declare class ActionResultHeal$Type extends MessageType<ActionResultHeal> {
    constructor();
    create(value?: PartialMessage<ActionResultHeal>): ActionResultHeal;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ActionResultHeal): ActionResultHeal;
    internalBinaryWrite(message: ActionResultHeal, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message fight.ActionResultHeal
 */
export declare const ActionResultHeal: ActionResultHeal$Type;
declare class ActionResult$Type extends MessageType<ActionResult> {
    constructor();
    create(value?: PartialMessage<ActionResult>): ActionResult;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ActionResult): ActionResult;
    internalBinaryWrite(message: ActionResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message fight.ActionResult
 */
export declare const ActionResult: ActionResult$Type;
declare class FightActionAttack$Type extends MessageType<FightActionAttack> {
    constructor();
    create(value?: PartialMessage<FightActionAttack>): FightActionAttack;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FightActionAttack): FightActionAttack;
    internalBinaryWrite(message: FightActionAttack, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message fight.FightActionAttack
 */
export declare const FightActionAttack: FightActionAttack$Type;
declare class FightSkillAction$Type extends MessageType<FightSkillAction> {
    constructor();
    create(value?: PartialMessage<FightSkillAction>): FightSkillAction;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FightSkillAction): FightSkillAction;
    internalBinaryWrite(message: FightSkillAction, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message fight.FightSkillAction
 */
export declare const FightSkillAction: FightSkillAction$Type;
declare class FightSpellAction$Type extends MessageType<FightSpellAction> {
    constructor();
    create(value?: PartialMessage<FightSpellAction>): FightSpellAction;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FightSpellAction): FightSpellAction;
    internalBinaryWrite(message: FightSpellAction, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message fight.FightSpellAction
 */
export declare const FightSpellAction: FightSpellAction$Type;
declare class FightAction$Type extends MessageType<FightAction> {
    constructor();
    create(value?: PartialMessage<FightAction>): FightAction;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FightAction): FightAction;
    internalBinaryWrite(message: FightAction, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message fight.FightAction
 */
export declare const FightAction: FightAction$Type;
declare class EndFight$Type extends MessageType<EndFight> {
    constructor();
    create(value?: PartialMessage<EndFight>): EndFight;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EndFight): EndFight;
    internalBinaryWrite(message: EndFight, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message fight.EndFight
 */
export declare const EndFight: EndFight$Type;
declare class RawCharacterData$Type extends MessageType<RawCharacterData> {
    constructor();
    create(value?: PartialMessage<RawCharacterData>): RawCharacterData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RawCharacterData): RawCharacterData;
    internalBinaryWrite(message: RawCharacterData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message fight.RawCharacterData
 */
export declare const RawCharacterData: RawCharacterData$Type;
declare class StartFight$Type extends MessageType<StartFight> {
    constructor();
    create(value?: PartialMessage<StartFight>): StartFight;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StartFight): StartFight;
    internalBinaryWrite(message: StartFight, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message fight.StartFight
 */
export declare const StartFight: StartFight$Type;
/**
 * @generated ServiceType for protobuf service fight.FightService
 */
export declare const FightService: any;
export {};
