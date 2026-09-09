export type BiExportsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsTaskStateMachine {
  private allowedTransitions: Record<BiExportsTaskState, BiExportsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsTaskState, to: BiExportsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsTaskState, to: BiExportsTaskState): BiExportsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsTask: " + from + " -> " + to);
    }
    return to;
  }
}
