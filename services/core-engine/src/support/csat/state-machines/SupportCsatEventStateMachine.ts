export type SupportCsatEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatEventStateMachine {
  private allowedTransitions: Record<SupportCsatEventState, SupportCsatEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatEventState, to: SupportCsatEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatEventState, to: SupportCsatEventState): SupportCsatEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatEvent: " + from + " -> " + to);
    }
    return to;
  }
}
