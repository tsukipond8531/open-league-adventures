import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { ResponseFightNextTick } from "./fight";
import type { RequestFightNextTickMessage } from "./fight";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RequestStartFight } from "./fight";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { ServerFightMessage } from "./fight";
import type { ClientFightMessage } from "./fight";
import type { DuplexStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service fight.FightService
 */
export interface IFightServiceClient {
    /**
     * @generated from protobuf rpc: Fight(stream fight.ClientFightMessage) returns (stream fight.ServerFightMessage);
     */
    fight(options?: RpcOptions): DuplexStreamingCall<ClientFightMessage, ServerFightMessage>;
    /**
     * @generated from protobuf rpc: RequestFightStart(fight.RequestStartFight) returns (stream fight.ServerFightMessage);
     */
    requestFightStart(input: RequestStartFight, options?: RpcOptions): ServerStreamingCall<RequestStartFight, ServerFightMessage>;
    /**
     * @generated from protobuf rpc: RequestFightNextTick(fight.RequestFightNextTickMessage) returns (fight.ResponseFightNextTick);
     */
    requestFightNextTick(input: RequestFightNextTickMessage, options?: RpcOptions): UnaryCall<RequestFightNextTickMessage, ResponseFightNextTick>;
}
/**
 * @generated from protobuf service fight.FightService
 */
export declare class FightServiceClient implements IFightServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: Fight(stream fight.ClientFightMessage) returns (stream fight.ServerFightMessage);
     */
    fight(options?: RpcOptions): DuplexStreamingCall<ClientFightMessage, ServerFightMessage>;
    /**
     * @generated from protobuf rpc: RequestFightStart(fight.RequestStartFight) returns (stream fight.ServerFightMessage);
     */
    requestFightStart(input: RequestStartFight, options?: RpcOptions): ServerStreamingCall<RequestStartFight, ServerFightMessage>;
    /**
     * @generated from protobuf rpc: RequestFightNextTick(fight.RequestFightNextTickMessage) returns (fight.ResponseFightNextTick);
     */
    requestFightNextTick(input: RequestFightNextTickMessage, options?: RpcOptions): UnaryCall<RequestFightNextTickMessage, ResponseFightNextTick>;
}
