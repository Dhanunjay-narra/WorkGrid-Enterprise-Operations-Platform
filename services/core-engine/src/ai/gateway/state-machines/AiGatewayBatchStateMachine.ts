export type AiGatewayBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayBatchStateMachine {
  private allowedTransitions: Record<AiGatewayBatchState, AiGatewayBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayBatchState, to: AiGatewayBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayBatchState, to: AiGatewayBatchState): AiGatewayBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayBatch: " + from + " -> " + to);
    }
    return to;
  }
}
