export type AiGatewayAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayAssignmentStateMachine {
  private allowedTransitions: Record<AiGatewayAssignmentState, AiGatewayAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayAssignmentState, to: AiGatewayAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayAssignmentState, to: AiGatewayAssignmentState): AiGatewayAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
