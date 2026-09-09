export type AiGatewayRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayRecordStateMachine {
  private allowedTransitions: Record<AiGatewayRecordState, AiGatewayRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayRecordState, to: AiGatewayRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayRecordState, to: AiGatewayRecordState): AiGatewayRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayRecord: " + from + " -> " + to);
    }
    return to;
  }
}
