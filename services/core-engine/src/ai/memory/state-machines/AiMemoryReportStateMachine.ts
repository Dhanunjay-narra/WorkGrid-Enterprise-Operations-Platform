export type AiMemoryReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemoryReportStateMachine {
  private allowedTransitions: Record<AiMemoryReportState, AiMemoryReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemoryReportState, to: AiMemoryReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemoryReportState, to: AiMemoryReportState): AiMemoryReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemoryReport: " + from + " -> " + to);
    }
    return to;
  }
}
