export type AiGatewayNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayNodeStateMachine {
  private allowedTransitions: Record<AiGatewayNodeState, AiGatewayNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayNodeState, to: AiGatewayNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayNodeState, to: AiGatewayNodeState): AiGatewayNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayNode: " + from + " -> " + to);
    }
    return to;
  }
}
