export type DmsFoldersMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersMappingStateMachine {
  private allowedTransitions: Record<DmsFoldersMappingState, DmsFoldersMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersMappingState, to: DmsFoldersMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersMappingState, to: DmsFoldersMappingState): DmsFoldersMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersMapping: " + from + " -> " + to);
    }
    return to;
  }
}
