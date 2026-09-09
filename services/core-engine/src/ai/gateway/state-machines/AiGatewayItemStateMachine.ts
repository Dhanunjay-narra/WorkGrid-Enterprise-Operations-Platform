export type AiGatewayItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayItemStateMachine {
  private allowedTransitions: Record<AiGatewayItemState, AiGatewayItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayItemState, to: AiGatewayItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayItemState, to: AiGatewayItemState): AiGatewayItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayItem: " + from + " -> " + to);
    }
    return to;
  }
}
