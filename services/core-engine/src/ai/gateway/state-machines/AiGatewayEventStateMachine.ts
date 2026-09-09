export type AiGatewayEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayEventStateMachine {
  private allowedTransitions: Record<AiGatewayEventState, AiGatewayEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayEventState, to: AiGatewayEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayEventState, to: AiGatewayEventState): AiGatewayEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayEvent: " + from + " -> " + to);
    }
    return to;
  }
}
