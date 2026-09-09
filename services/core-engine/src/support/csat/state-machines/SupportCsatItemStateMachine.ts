export type SupportCsatItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatItemStateMachine {
  private allowedTransitions: Record<SupportCsatItemState, SupportCsatItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatItemState, to: SupportCsatItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatItemState, to: SupportCsatItemState): SupportCsatItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatItem: " + from + " -> " + to);
    }
    return to;
  }
}
