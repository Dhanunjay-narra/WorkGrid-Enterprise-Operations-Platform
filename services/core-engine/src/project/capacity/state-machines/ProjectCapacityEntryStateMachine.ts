export type ProjectCapacityEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacityEntryStateMachine {
  private allowedTransitions: Record<ProjectCapacityEntryState, ProjectCapacityEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacityEntryState, to: ProjectCapacityEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacityEntryState, to: ProjectCapacityEntryState): ProjectCapacityEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacityEntry: " + from + " -> " + to);
    }
    return to;
  }
}
