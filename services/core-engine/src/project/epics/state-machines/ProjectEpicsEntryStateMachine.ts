export type ProjectEpicsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsEntryStateMachine {
  private allowedTransitions: Record<ProjectEpicsEntryState, ProjectEpicsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsEntryState, to: ProjectEpicsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsEntryState, to: ProjectEpicsEntryState): ProjectEpicsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
