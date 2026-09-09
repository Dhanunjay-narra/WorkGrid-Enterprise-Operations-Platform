export type AiGatewayMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayMetricStateMachine {
  private allowedTransitions: Record<AiGatewayMetricState, AiGatewayMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayMetricState, to: AiGatewayMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayMetricState, to: AiGatewayMetricState): AiGatewayMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayMetric: " + from + " -> " + to);
    }
    return to;
  }
}
