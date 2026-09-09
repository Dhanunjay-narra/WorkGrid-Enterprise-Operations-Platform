export type AiGatewayTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayTransactionStateMachine {
  private allowedTransitions: Record<AiGatewayTransactionState, AiGatewayTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayTransactionState, to: AiGatewayTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayTransactionState, to: AiGatewayTransactionState): AiGatewayTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
