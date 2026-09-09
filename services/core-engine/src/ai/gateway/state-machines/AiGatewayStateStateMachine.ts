export type AiGatewayStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayStateStateMachine {
  private allowedTransitions: Record<AiGatewayStateState, AiGatewayStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayStateState, to: AiGatewayStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayStateState, to: AiGatewayStateState): AiGatewayStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayState: " + from + " -> " + to);
    }
    return to;
  }
}
