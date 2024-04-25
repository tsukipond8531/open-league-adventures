import { FightService } from "./fight";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
// ---------- SERVICES ----------
/**
 * @generated from protobuf service fight.FightService
 */
export class FightServiceClient {
    _transport;
    typeName = FightService.typeName;
    methods = FightService.methods;
    options = FightService.options;
    constructor(_transport) {
        this._transport = _transport;
    }
    /**
     * @generated from protobuf rpc: Fight(stream fight.ClientFightMessage) returns (stream fight.ServerFightMessage);
     */
    fight(options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("duplex", this._transport, method, opt);
    }
    /**
     * @generated from protobuf rpc: RequestFightStart(fight.RequestStartFight) returns (stream fight.ServerFightMessage);
     */
    requestFightStart(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: RequestFightNextTick(fight.RequestFightNextTickMessage) returns (fight.ResponseFightNextTick);
     */
    requestFightNextTick(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
