export type AiGatewayConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayConfigStateMachine {
  private allowedTransitions: Record<AiGatewayConfigState, AiGatewayConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayConfigState, to: AiGatewayConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayConfigState, to: AiGatewayConfigState): AiGatewayConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayConfig: " + from + " -> " + to);
    }
    return to;
  }
}
