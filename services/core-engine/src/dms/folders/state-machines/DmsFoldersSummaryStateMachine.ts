export type DmsFoldersSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersSummaryStateMachine {
  private allowedTransitions: Record<DmsFoldersSummaryState, DmsFoldersSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersSummaryState, to: DmsFoldersSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersSummaryState, to: DmsFoldersSummaryState): DmsFoldersSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersSummary: " + from + " -> " + to);
    }
    return to;
  }
}
