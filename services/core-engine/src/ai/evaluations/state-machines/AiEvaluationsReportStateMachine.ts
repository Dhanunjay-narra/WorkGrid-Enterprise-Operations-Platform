export type AiEvaluationsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsReportStateMachine {
  private allowedTransitions: Record<AiEvaluationsReportState, AiEvaluationsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsReportState, to: AiEvaluationsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsReportState, to: AiEvaluationsReportState): AiEvaluationsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsReport: " + from + " -> " + to);
    }
    return to;
  }
}
