export type BiExportsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsBatchStateMachine {
  private allowedTransitions: Record<BiExportsBatchState, BiExportsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsBatchState, to: BiExportsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsBatchState, to: BiExportsBatchState): BiExportsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
