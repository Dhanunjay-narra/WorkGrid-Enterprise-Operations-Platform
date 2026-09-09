export type AiGatewayPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayPolicyStateMachine {
  private allowedTransitions: Record<AiGatewayPolicyState, AiGatewayPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayPolicyState, to: AiGatewayPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayPolicyState, to: AiGatewayPolicyState): AiGatewayPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
