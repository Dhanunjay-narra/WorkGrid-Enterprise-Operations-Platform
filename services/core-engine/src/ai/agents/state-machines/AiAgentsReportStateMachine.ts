export type AiAgentsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsReportStateMachine {
  private allowedTransitions: Record<AiAgentsReportState, AiAgentsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsReportState, to: AiAgentsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsReportState, to: AiAgentsReportState): AiAgentsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsReport: " + from + " -> " + to);
    }
    return to;
  }
}
