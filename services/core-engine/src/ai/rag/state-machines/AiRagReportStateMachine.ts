export type AiRagReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagReportStateMachine {
  private allowedTransitions: Record<AiRagReportState, AiRagReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagReportState, to: AiRagReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagReportState, to: AiRagReportState): AiRagReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagReport: " + from + " -> " + to);
    }
    return to;
  }
}
