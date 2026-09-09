export type IntMappingsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsReportStateMachine {
  private allowedTransitions: Record<IntMappingsReportState, IntMappingsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsReportState, to: IntMappingsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsReportState, to: IntMappingsReportState): IntMappingsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsReport: " + from + " -> " + to);
    }
    return to;
  }
}
