export type ProjectGanttEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttEntryStateMachine {
  private allowedTransitions: Record<ProjectGanttEntryState, ProjectGanttEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttEntryState, to: ProjectGanttEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttEntryState, to: ProjectGanttEntryState): ProjectGanttEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttEntry: " + from + " -> " + to);
    }
    return to;
  }
}
