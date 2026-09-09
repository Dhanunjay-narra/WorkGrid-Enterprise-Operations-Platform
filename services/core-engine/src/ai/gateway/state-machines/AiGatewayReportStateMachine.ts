export type AiGatewayReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiGatewayReportStateMachine {
  private allowedTransitions: Record<AiGatewayReportState, AiGatewayReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiGatewayReportState, to: AiGatewayReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiGatewayReportState, to: AiGatewayReportState): AiGatewayReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiGatewayReport: " + from + " -> " + to);
    }
    return to;
  }
}
