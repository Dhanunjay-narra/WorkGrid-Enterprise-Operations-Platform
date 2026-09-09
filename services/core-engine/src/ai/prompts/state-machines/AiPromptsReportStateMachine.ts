export type AiPromptsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsReportStateMachine {
  private allowedTransitions: Record<AiPromptsReportState, AiPromptsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsReportState, to: AiPromptsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsReportState, to: AiPromptsReportState): AiPromptsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsReport: " + from + " -> " + to);
    }
    return to;
  }
}
