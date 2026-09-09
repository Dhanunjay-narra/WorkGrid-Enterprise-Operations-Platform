export type AiGatewayTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayTaskStateMachine {
  private allowedTransitions: Record<AiGatewayTaskState, AiGatewayTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayTaskState, to: AiGatewayTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayTaskState, to: AiGatewayTaskState): AiGatewayTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayTask: " + from + " -> " + to);
    }
    return to;
  }
}
