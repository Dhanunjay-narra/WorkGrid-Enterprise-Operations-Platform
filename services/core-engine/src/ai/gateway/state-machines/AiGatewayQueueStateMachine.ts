export type AiGatewayQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayQueueStateMachine {
  private allowedTransitions: Record<AiGatewayQueueState, AiGatewayQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayQueueState, to: AiGatewayQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayQueueState, to: AiGatewayQueueState): AiGatewayQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayQueue: " + from + " -> " + to);
    }
    return to;
  }
}
