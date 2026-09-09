export type AiGatewayThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayThresholdStateMachine {
  private allowedTransitions: Record<AiGatewayThresholdState, AiGatewayThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayThresholdState, to: AiGatewayThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayThresholdState, to: AiGatewayThresholdState): AiGatewayThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
