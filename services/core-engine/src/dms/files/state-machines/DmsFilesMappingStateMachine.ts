export type DmsFilesMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesMappingStateMachine {
  private allowedTransitions: Record<DmsFilesMappingState, DmsFilesMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesMappingState, to: DmsFilesMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesMappingState, to: DmsFilesMappingState): DmsFilesMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesMapping: " + from + " -> " + to);
    }
    return to;
  }
}
