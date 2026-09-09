export type SupportCsatTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatTaskStateMachine {
  private allowedTransitions: Record<SupportCsatTaskState, SupportCsatTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatTaskState, to: SupportCsatTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatTaskState, to: SupportCsatTaskState): SupportCsatTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatTask: " + from + " -> " + to);
    }
    return to;
  }
}
