export type AiGatewaySessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewaySessionStateMachine {
  private allowedTransitions: Record<AiGatewaySessionState, AiGatewaySessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewaySessionState, to: AiGatewaySessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewaySessionState, to: AiGatewaySessionState): AiGatewaySessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewaySession: " + from + " -> " + to);
    }
    return to;
  }
}
